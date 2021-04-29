
function Table(props){
    let col=[];
    if(props.state.data){

        col.push(
            <thead key="head"><tr>
                <th style={{width:"20px"}}>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr></thead>
            
        )
        
        props.state.data.map(ele => {
            console.log()
            col.push(
            <tr className="trow" key={ele.id}>
                <td className="tdata">{props.state.data.indexOf(ele)+1}</td>
                <td className="tdata">{ele.firstName+" "+ele.lastName}</td>
                <td className="tdata">{ele.email}</td>
                <td className="tdata">{ele.title==='mr'?"Male":"Female"}</td>
            </tr>)
        })
        
    }
    return(
        <table className="table" id="tab1">
            
            {col}
            
        </table>
    );
}
export default Table;