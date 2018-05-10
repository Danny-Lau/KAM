$(document).ready(() => {

    SDK.loadNav();




        $("#create-product-button").click(() => {

            const gender = $("#gender").val();
            const category = $("#category").val();
            const url = $("#inputURL").val();
            const productDescription = $("#inputDescription").val();
            const price = $("#inputPrice").val();

            const xxs = $("#inputXXS").val();
            const xs = $("#inputXS").val();
            const s = $("#inputS").val();
            const m = $("#inputM").val();
            const l = $("#inputL").val();
            const xl = $("#inputXL").val();
            const xxl = $("#inputXXL").val();
            const size35 = $("#input35").val();
            const size36 = $("#input36").val();
            const size37 = $("#input37").val();
            const size38 = $("#input38").val();
            const size39 = $("#input39").val();
            const size40 = $("#input40").val();
            const size41 = $("#input41").val();
            const size42 = $("#input42").val();
            const size43 = $("#input43").val();
            const size44 = $("#input44").val();
            const size45 = $("#input45").val();
            const size46 = $("#input46").val();

            if (!url || !productDescription ||  !price || !gender || !category) {
                alert("Please fill in all required fields");

            } else if (isNaN(xxs), (xs), (s), (m), (l), (xl), (xxl), (size35),
                    (size36), (size37), (size38), (size39), (size40), (size41),
                    (size42), (size42), (size43), (size44), (size45), (size46)){

                alert("The stock have to be a number!");

            } else if (xxs == 0 && xs==0 && s==0 && m==0 && l==0 && xl==0 && xxl==0 && siz35==0
                && size36==0 && size37==0 && size38==0 && size39==0 && size40==0 && size41==0
                && size42==0 && size42==0 && size43==0 && size44==0 && size45==0 && size46==0){

                alert("Please fill in how many you have in stock");


            } else {
                event.preventDefault();
                const sellerID = SDK.Storage.load(" id");
                SDK.Product.createProduct(url, productDescription, sellerID, price, gender, category, (err,) => {

                    if (err && err.xhr.status === 401) {
                        $(".form-group").addClass("There was a mistake");
                    }
                    else if (err) {
                        console.log("Fail")
                    } else {

                       let productId = SDK.Storage.load(" newProductId");

                        if (xxs > 0) {
                            SDK.Size.createSize("XXS", xxs, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(xs > 0) {
                            SDK.Size.createSize("XS", xs, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(s > 0) {
                            SDK.Size.createSize("S", s, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(m > 0) {
                            SDK.Size.createSize("M", m, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(l > 0) {
                            SDK.Size.createSize("L", l, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(xl > 0) {
                            SDK.Size.createSize("XL", xl, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(xxl > 0) {
                            SDK.Size.createSize("XXL", xxl, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size35 > 0) {
                            SDK.Size.createSize("35", size35, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size36 > 0) {
                            SDK.Size.createSize("36", size36, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size37 > 0) {
                            SDK.Size.createSize("37", size37, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size38 > 0) {
                            SDK.Size.createSize("38", size38, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size39 > 0) {
                            SDK.Size.createSize("39", size39, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size40 > 0) {
                            SDK.Size.createSize("40", size40, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size41 > 0) {
                            SDK.Size.createSize("41", size41, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size42 > 0) {
                            SDK.Size.createSize("42", size42, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size43 > 0) {
                            SDK.Size.createSize("43", size43, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size44 > 0) {
                            SDK.Size.createSize("44", size44, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size45 > 0) {
                            SDK.Size.createSize("45", size45, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        if(size46 > 0) {
                            SDK.Size.createSize("46", size46, productId, (err) => {
                                if (err && err.xhr.status === 401) {
                                    $(".form-group").addClass("There was a mistake");
                                }
                                else if (err) {
                                    console.log("Fail")
                                }
                            });
                        }

                        alert("Product created");

                    }
                })
            }

        })
});