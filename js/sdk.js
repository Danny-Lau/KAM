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

               cb(null, data);

            });
        },

        signup:(username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password,
                },
                url: "/user/signup",
                method: "POST"
            }, (err, data) =>{

                if(err) return cb(err);

                let userdata = JSON.parse(data);

                cb(null, data);

                });
        },

    },

    Product: {

        loadProduct:(cb) => {
            SDK.request({
                url: "/Product",
                method: "GET"

            }, (err, products) => {

                cb(null, products);
            });
        },

    },

    loadFiltering:(cb) => {
        $("#nav-filtering").load("filtering.html")
    },

    loadNav: (cb) =>{
        const currentUser = SDK.User.current();
        if(currentUser) {
            $("#nav-container").load("currentNav.html")

        } else {
            $("#nav-container").load("nav.html")
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