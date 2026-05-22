import React, { useState } from 'react'

const bmiCategories = [
    {
        label: "Underweight",
        min: 0,
        max: 18.5,
        Tcolor: "text-blue-700",
        color: "bg-blue-300",
        tip: "You may need to gain some weight. Consider a balanced diet and strength training.",
    },
    {
        label: "Normal / Healthy",
        min: 18.5,
        max: 24.999,
        Tcolor: "text-green-700",
        color: "bg-green-300",
        tip: "Great! Maintain your lifestyle with regular exercise and a balanced diet.",
    },
    {
        label: "Overweight",
        min: 25,
        max: 29.999,
        Tcolor: "text-yellow-700",
        color: "bg-yellow-300",
        tip: "Try to stay active and watch your diet to avoid health risks.",
    },
    {
        label: "Obese",
        min: 30,
        max: Infinity,
        Tcolor: "text-red-700",
        color: "bg-red-300",
        tip: "It's recommended to consult a healthcare professional and adopt a healthier lifestyle.",
    },
];

const BmiCalc = () => {

    const [HeightFeet, setHeightFeet] = useState('');
    const [HeightInches, setHeightInches] = useState('');
    const [Weight, setWeight] = useState('');
    const [Flag, setFlag] = useState(false);
    const [BMI, setBMI] = useState(0);
    const [Desc, setDesc] = useState({})


    const calcBMI = () => {


        if (HeightFeet === '' || HeightInches === '' || Weight === '' || HeightFeet == 0 || Weight == 0) {
            return
        }

        let totalInches = (Number(HeightFeet) * 12) + Number(HeightInches);
        let bmi = ((703 * Number(Weight)) / (totalInches * totalInches)).toFixed(2);

        console.log(totalInches, bmi);

        let desc = bmiCategories.find(
            (item) => bmi >= item.min && bmi <= item.max
        );
        console.log(desc);


        setDesc(desc);
        
        setBMI(bmi);
        setFlag(true);
    }


    return (
        <div className='poppins bg-white rounded-xl px-4 py-4 w-[90%] h-70%'>
            <div className=''>
                <h1 className='text-sm font-bold'>BMI Calculator</h1>
            </div>

            <div className='flex flex-col mt-4 gap-1 w-full'>
                <p className='text-xs text-gray-700 font-medium'>Height</p>
                <div className='flex gap-2'>
                    <div className='flex items-center w-1/2'>
                        <input className='w-full py-2 px-2 text-sm font-medium poppins outline-none border-y border-l border-gray-500 rounded-l-lg' type="number"
                            value={HeightFeet}
                            onChange={(e) => {
                                setHeightFeet(e.target.value)
                            }}
                            required
                        />
                        <span className='bg-indigo-500 rounded-r-lg py-2 px-2 text-sm font-medium border border-indigo-500'>ft</span>
                    </div>
                    <div className='flex items-center w-1/2'>
                        <input className='w-full py-2 px-2 text-sm font-medium poppins outline-none border-y border-l border-gray-500 rounded-l-lg' type="number"
                            value={HeightInches}
                            onChange={(e) => {
                                setHeightInches(e.target.value)
                            }}
                            required
                        />
                        <span className='bg-indigo-500 rounded-r-lg py-2 px-2 text-sm font-medium border border-indigo-500'>in</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-4 gap-1'>
                <p className='text-xs text-gray-700 font-medium'>Weight</p>
                <div className='flex gap-10 w-full'>
                    <div className='flex items-center w-full'>
                        <input className='w-full py-2 px-2 text-sm font-medium poppins outline-none border-y border-l border-gray-500 rounded-l-lg' type="number"
                            value={Weight}
                            onChange={(e) => {
                                setWeight(e.target.value)
                            }}
                            required
                        />
                        <span className='bg-indigo-500 rounded-r-lg py-2 px-2 text-sm font-medium border border-indigo-500'>lsb</span>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                calcBMI();
            }} className='w-full rounded-xl mt-5 py-3 px-10 text-sm font-normal active:bg-[#5014c7] transition-all duration-500 bg-indigo-500'>Calculate BMI</button>

            {
                (Flag) ? <div className={`${Desc.color} rounded-xl mt-4 p-4 poppins ${Desc.Tcolor}`}>
                    <h2 className='w-full text-lg font-medium'>Your BMI: {BMI}</h2>
                    <p className=' w-full text-xs font-normal'>{Desc.label}</p>
                    <p className=' w-full text-xs font-bold mt-3'>{Desc.tip}</p>
                </div> : <div></div>
            }
        </div>
    )
}

export default BmiCalc