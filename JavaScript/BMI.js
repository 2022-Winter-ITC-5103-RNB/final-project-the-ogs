function getBMI()
{
        Height = document.getElementById("Height").value;
        Weight = document.getElementById("Weight").value;
        document.getElementById("BMI").innerHTML = Weight/((Height/100) * (Height/100));
}

