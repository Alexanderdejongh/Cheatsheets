import React,{useState} from 'react'

function CountingMachine() {

    const [count, setCount] = useState([])
    const [calculate, setCalculate] = useState([])
    const [sign, setSign] = useState([])

    const getButtonValue = (event) =>{
        const getValue = event.target.innerText
        setCount(pref => pref + getValue)
        if( getValue === "*" ||
            getValue === "/" ||
            getValue === "-" ||
            getValue === "+" ){
                if( sign === "*" ||
                    sign === "/" ||
                    sign === "-" ||
                    sign === "+" )
                    {
                    if(sign === "*"){
                        const total = count * calculate;
                        console.log(total) 
                        setCount([])
                        setCalculate(total)
                        setSign(getValue)
                    }
                    if(sign === "/"){
                        const total = Number(calculate) / Number(count)  ;
                        setCount([])
                        setCalculate(total)
                        setSign(getValue)
                    }
                    if(sign === "-"){
                        const total = Number(calculate) - Number(count);
                        setCount([])
                        setCalculate(total)
                        setSign(getValue)
                    }
                    if(sign === "+"){
                        const total =  Number(calculate) + Number(count) ;
                        setCount([])
                        setCalculate(total)
                        setSign(getValue)
                    }
                } else{
                    setCalculate(pref => pref + count)
                    setSign(pref => pref + getValue)
                    setCount([])
                }
                
            }
        if (getValue === "Clear"){
            setCount([])
            setCalculate([])
            setSign([])
        }
        
    }

    const getCalculatedNumber = ((event)=> {
        const getValue = event.target.innerText
        if (getValue === "="){
            if(sign === "*"){
                const total = count * calculate;
                setCount(total)
                setCalculate([])
                setSign([])
            }
            if(sign === "/"){
                const total = Number(calculate) / Number(count)  ;
                setCount(total)
                setCalculate([])
                setSign([])
            }
            if(sign === "-"){
                const total = Number(calculate) - Number(count);
                setCount(total)
                setCalculate([])
                setSign([])
            }
            if(sign === "+"){
                const total =  Number(count) + Number(calculate);
                setCount(total)
                setCalculate([])
                setSign([])
            }
        }
    })

    return (
        <div className="countingMBox">
            <h1 className="countingTitle">Rekenmachine van Sander</h1>
            <div className="output">
                <input type="text" value={count}></input>
            </div>
            <div className="box-Numbers">
                <button onClick={getButtonValue} className="Numbers">1</button>
                <button onClick={getButtonValue} className="Numbers">2</button>
                <button onClick={getButtonValue} className="Numbers">3</button>
                <button onClick={getButtonValue} className="Numbers">4</button>
                <button onClick={getButtonValue} className="Numbers">5</button>
                <button onClick={getButtonValue} className="Numbers">6</button>
                <button onClick={getButtonValue} className="Numbers">7</button>
                <button onClick={getButtonValue} className="Numbers">8</button>
                <button onClick={getButtonValue} className="Numbers">9</button>
                <button onClick={getButtonValue} className="Numbers">0</button>
                <button onClick={getButtonValue} className="nonNumbers">Clear</button>
                <button onClick={getCalculatedNumber} className="nonNumbers">=</button>
            </div>
            <div className="box-NonNumbers">
                <button onClick={getButtonValue} className="nonNumbers">+</button>
                <button onClick={getButtonValue} className="nonNumbers">-</button>
                <button onClick={getButtonValue} className="nonNumbers">*</button>
                <button onClick={getButtonValue} className="nonNumbers">/</button>
                
            </div>
            <div className="calc-box">
                <p className="calc">{count}</p>
                <p className="calc">{sign}</p>
                <p className="calc">{calculate}</p>
            </div>
    
        </div>
    )
}

export default CountingMachine
