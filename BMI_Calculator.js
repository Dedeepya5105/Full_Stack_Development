# BMI_Calculator code HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator using JavaScript</title>
    <link rel = "stylesheet" href="bmi calculator.css">
    <script src="bmi calculator.js" defer></script>

</head>
<body>
    <div class = 'wrapper'>
        <p>Height in cm:
            <input type = "text" id = "height"><br><span id = "heignt_error"></span>
        </p>

        <p>Weight in Kg:
            <input text = "text" id="weight"><br><span id = "weight_error"></span>
        </p>

        <button id = "btn">Calculate</button>
        <p id = "output"></p>
    </div>
</body>
</html>




# BMI_Calculator code in CSS



body{
    margin: 0%;
    padding : 0%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background-color:skyblue;
}   
span{
    color: red;

}
.wrapper{
    position: absolute;
    top: 45%;
    left: 50%;
    transform:translate(-50%, -50%);
    padding: 15px;
    background: black;
    border-radius: 5px;
    box-shadow: rgb(38,57,77) 0px 20px 30px -10px;;
}




# BMI_Calculator code in JavaScript



let button = document.getElementById("btn");

button.addEventListener('click', () =>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'please provide a valid height';
    }
    else{
        document.getElementById('height_error').innerHTML = '';
        height_satus = true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'pkease provide valid weight';
    }
    else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / (height*height) / 10000).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight :' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal :' + bmi;
        }else{
            result.innerHTML = 'Over weight :' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }

});
