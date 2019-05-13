const conn = require("./mysql_connection");

const model = {
    //Get all foods
    async getAll() {
        return await conn.query("SELECT * FROM Fit_Foods");
    },

    //Get food based on id
    async get(id) {
        const data = conn.query("SELECT * FROM Fit_Foods WHERE id=?", id);
        if(!data) {
            throw Error("User not found");
        }
        return await data[0];
    },

    //Add food
    async add(input) {
        if(input.calories < 10000 && input.carbohydrates < 100 && input.protein < 100 && input.fat < 100) {
            const data = await conn.query("INSERT INTO Fit_Foods (foodName, created_at, calories, carbohydrates, protein, fat) VALUES (?)",
                [input.foodName, new Date(), input.calories, input.carbohydrates, input.protein, input.fat]);
            return await model.get(data.insertId)
        } else {
            throw Error("Outside reasonable ranges: Please double check your nutritional information");
        };
    },
    
    //Edit food
    async editFood(oldFoodName, newFoodName, calories, carbohydrates, protein, fat) {
        if(calories < 10000 && carbohydrates < 100 && protein < 100 && fat < 100) {
            const data = conn.query("SELECT 1 FROM Fit_Foods WHERE foodName = ? ORDER BY ? LIMIT 1", 
                [oldFoodName, newFoodName]);
            if(data.length = 0) {
                throw Error("Food not found");
            } else {
                await conn.query("UPDATE Fit_Foods SET foodName = ?, calories = ?, carbohydrates = ?, protein = ?, fat = ? WHERE foodName = ?", 
                    [foodName, originalFood, calories, carbohydrates, protein, fat]);
                return { status: "success", msg: "FoodName was Successfully Changed" };
            }
        } else {
            throw Error("Outside reasonable ranges: Please double check your nutritional information");
        }
    },

    //Search food
    async search(input) {
        const data = conn.query('SELECT * FROM Fit_Foods');
        var searchedFood = [];
        for(var i = 0; i < data.length; i++)
        {
            var foodName = data[i].foodName;
            for(var j = 0; j < input.length; j++)
            {
                if(input.charAt(j) != foodName.charAt(j)) {
                    break;
                }
            }
            searchedFood.push(foodName)
        }
        return searchedFood;
    }
}

module.exports = model;

    /*
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Foods WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete food based on name
    deleteFood(input, data) {
        conn.query("SELECT 1 FROM Fit_Foods WHERE foodName = ? ORDER BY foodName LIMIT 1", [[input.foodName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Food not found"));
            } else {
                conn.query("DELETE FROM Fit_Foods WHERE foodName = ?", [[input.foodName]],
                (err, data) => {
                    if(err) {
                        cb(err);
                        return;
                    }
                    model.get(data.insertId, (err, data) => {
                        cb(err, data);
                    });
                });
            };
        });
    }, 
};
*/

