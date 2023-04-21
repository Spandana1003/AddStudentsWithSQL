
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [stuData,setStuData] = useState([]);
	const [stuName,setName] = useState('');
	const [stuRoll,setRoll] = useState();
	const [stuBranch,setBranch] = useState('');

	useEffect(()=>{
		fetch('http://localhost:5000/students').then(res=> res.json()).then(data => {
			setStuData(data);
		})
            //.then(res=>res.json())
            //.then(json=>console.log(json))
	},[])
	return (
		<div className="App">
			<table>
				<tbody>
				<tr>
					<th>Name</th>
					<th>Roll</th>
					<th>Branch</th>
				</tr>
				
				{stuData.map((data)=>
					(<tr><td>{data.name}</td>
					<td>{data.roll}</td>
					<td>{data.branch}</td></tr>)
				)}
				</tbody>
				</table>
					<label>Name</label>
					<input value={stuName} onChange={(val)=>setName(val.target.value)} type='text'/>
					<label>Roll</label>
					<input value={stuRoll} onChange={(val)=>setRoll(val.target.value)} type='number' />
					<label>Branch</label>
					<input value={stuBranch} onChange={(val)=>setBranch(val.target.value)} type='text' />
					<button onClick={()=>{
						axios.post('http://localhost:5000/students',{
							name: stuName,
							roll: stuRoll,
							branch: stuBranch
						})
					}}>Add</button>
					
		</div>
	);
}

export default App;
