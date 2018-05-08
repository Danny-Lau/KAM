const SDK = {
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {

        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: headers,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: (data, status, xhr) => {
                cb(null, data, status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    User: {

        current:() => {
            return SDK.Storage.load("user");
        },

        login: (username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password
                },
                url: "/user/login",
                method: "POST"
            }, (err, data) => {

                if (err) return cb(err);

                SDK.Storage.persist(" Username", data.username);
                SDK.Storage.persist(" password", data.password);
                SDK.Storage.persist(" mail", data.mail);
                SDK.Storage.persist(" UserId", data.brugerId);
                SDK.Storage.persist(" type", data.type);

                cb(null, data);
            });
        },

        signup: (username, password, mail,  cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password,
                    mail: mail,

                },
                url:"/user/signup",
                method: "POST"
            }, (err, data) => {

                if (err) return cb(err);
                SDK.Storage.persist(" Username", data.username);
                SDK.Storage.persist(" password", data.password);
                SDK.Storage.persist(" mail", data.mail);
                SDK.Storage.persist(" UserId", data.brugerId);
                SDK.Storage.persist(" type", data.type);


                cb(null, data);

            });
        },

        userInfo:(address, postNumber, city, cb) => {
            SDK.request({
                data:{
                    address: address,
                    postNumber: postNumber,
                    city: city
                },
                url:"/sendingInfo",
                method: "POST"
            }, (err, data) => {

                if(err) return cb(err);

                let sendingInfo = JSON.parse(data);

                SDK.Storage.persist("SendingId", sendingInfo.forsendelsesInformationerId)

            })
        }

    },

    Seller:{

        login:(companyName, password, cb) => {
            SDK.request({
                data:{
                   companyName: companyName,
                   password: password,
                },
                url:"/seller/login",
                method: "POST"
            }, (err, data) => {

                if (err) return cb(err);

                SDK.Storage.persist(" id", data.sellerId);
                SDK.Storage.persist(" Company", data.companyName);
                SDK.Storage.persist(" password", data.password);
                SDK.Storage.persist(" mail", data.mail);
                SDK.Storage.persist(" cvr", data.cvr);
                SDK.Storage.persist(" number", data.number);
                SDK.Storage.persist(" type", data.type);


                cb(null, data);
            });
        },

    },

    Admin:{

        adminLogin:(username, password, cb) => {
            SDK.request({
                data:{
                    username: username,
                    password: password,
                },
                url:"/admin/login",
                method: "POST"
            }, (err, data) => {

                if (err) return cb(err);

                SDK.Storage.persist(" id", data.adminId);
                SDK.Storage.persist(" name", data.username);
                SDK.Storage.persist(" password", data.password);
                SDK.Storage.persist(" type", data.type);




                cb(null, data);
            });
        },

    },

    Product: {

        loadProduct:(cb) => {
            let localCat = SDK.Storage.load("CAT");
            SDK.request({
                url: "/Product/category/" + localCat ,
                method: "GET"

            }, (err, products) => {
                if (err) return (err);

                cb(null, products);
            });
        },

        onClickProduct:(id) => {
            window.alert(id);
        },

        //Request til at hente produkter fra en specifik sælger
        loadSellerProduct:(cb) => {

            const sellerId = SDK.Storage.load(" id");

            SDK.request ({
                url: "/Product/" + sellerId,
                method: "GET"
            }, (err, products) => {

                cb(null, products);
            });

        },

        createProduct:(url, productDescription, stock, sellerID, price, variant, gender, category, cb ) => {
            SDK.request({
                data:{
                    url: url,
                    productDescription: productDescription,
                    stock: stock,
                    sellerID:sellerID,
                    price: price,
                    variant: variant,
                    gender: gender,
                    category: category

                },
                url:"/Product/New",
                method:"POST"

            }, (err, data) => {

                if (err) return (err);

                cb(null, data);
            })
        }

    },


    loadFiltering:() => {
        $("#nav-filtering").load("filtering.html")
    },

    loadNav: () => {


        const type = SDK.Storage.load(" type");

        if (type == 1) {
            $("#nav-container").load("userNav.html")

        } else if (type == 2) {
            $("#nav-container").load("sellerNav.html")
        }
          else if (type == 3) {
            $("#nav-container").load("adminNav.html")
        }

        else {
            $("#nav-container").load("Nav.html")
        }
    },


    Storage: {
        prefix: "KAMMODESDK",
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        remove: (key)  => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    }


};
