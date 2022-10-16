function openPage()
        {
            var x = document.getElementById("vethuku").value;

            if (x === "art")
            {
                window.open("art.html");
            }
            if (x === "bags")
            {
                window.open("bags.html");
            }
            if (x === "bangles")
            {
                window.open("bangles.html");
            }
            if (x === "candles")
            {
                window.open("candles.html");
            }
            if (x === "chains")
            {
                window.open("chains.html");
            }
            if (x === "decoratives")
            {
                window.open("decoratives.html");
            }
            if (x === "earrings")
            {
                window.open("earrings.html");
            }
            if (x === "gifts")
            {
                window.open("gifts.html");
            }
            if (x === "handloom sarees")
            {
                window.open("handloomsarees.html");
            }
            if (x === "keychains")
            {
                window.open("keychains.html");
            }
            if (x === "phonecases")
            {
                window.open("phonecases.html");
            }
            if (x === "rings")
            {
                window.open("rings.html");
            }
            if (x === "t shirts")
            {
                window.open("tshirts.html");
            }
            else
            {
                alert("PRODUCT NOT FOUND !!!...")
            }
        }

 function validate(){
            let name = document.querySelector(".name");
            let email = document.querySelector(".email");
            let mobile = document.querySelector(".number");
            let add = document.querySelector(".add");
            let place = document.querySelector(".place");
            let landmark = document.querySelector(".landmark");
            let town = document.querySelector(".city");
            let state = document.querySelector(".state");
            let sendBtn = document.querySelector(".send-btn");
        
           sendBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if(name.value == "" || email.value =="" || mobile.value == "" || add.value == "" || place.value == "" || landmark.value == "" || town.value == "" || state.value == "" )
                {
                    emptyerror();
                } else{
                    sendmail(name.value, email.value, mobile.value,add.value,place.value,landmark.value,town.value,state.value);
                    success();
                }
            });
        }

        validate();

        function sendmail(name,email,mobile,add,place,landmark,town,state){
            emailjs.send("service_p9palkd","template_6qc2mms",{
                to_name: name,
                from_name: email,
                Number: mobile,
                building:add,
                Area:place,
                Landmark:landmark,
                City:town,
                State:state,


                });
        }
        function emptyerror(){
            swal({
                title: "OOPS!",
                text: "Fields cannot be empty!",
                icon: "error",
              });
        }
        function success(){
            swal({
                title: "Address Saved Successfull",
                text: "Proceed to checkout",
                icon: "success",
              });
        }
