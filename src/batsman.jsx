import { useState } from "react"

export default function Batsman(){
    const[runs, setRuns] = useState(0);
    const [sixs,setSixes]=useState(0);
    const [fours,setFours]=useState(0);

    const handleSingle=()=>{
        const newRuns =  runs +1;
        setRuns(newRuns)
    }
     const doubleRuns=()=>{
        const newRuns =  runs +2;
        setRuns(newRuns)
    }
    const tripleRuns=()=>{
        const newRuns =  runs +3;
        setRuns(newRuns)
    }
     const fourRuns=()=>{
        const newRuns =  runs +4;
        const newFours = fours+1;
        setFours(newFours)
        setRuns(newRuns)
    }
     const sixRuns=()=>{
        const newRuns =  runs +6;
        const newSixes =sixs +1;
        setSixes(newSixes)
        setRuns(newRuns)
    }
    
    return(
        <div>
            <h3>Player: Bangladeshi Batsman</h3>
            <p>Sixs: {sixs}</p>
            <p>Fours: {fours}</p>
            {
                runs>=50 && <p>congratulations You Score Half century </p>
            }
            {
                runs>=100 && <p>congratulations You Score  century </p>
            }
            <h4>Score: {runs}</h4>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={fourRuns}>Fours</button>
            <button onClick={doubleRuns}>Double</button>
            <button onClick={sixRuns}>Six</button>
            <button onClick={tripleRuns}>Triple</button>

        </div>

    )
}