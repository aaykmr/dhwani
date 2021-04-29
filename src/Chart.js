import { PieChart } from 'react-minimal-pie-chart';
 function Chart(props){
     let count1=0, count2=0;
     let ele=[];
     if(props.state.data){
        props.state.data.forEach(ele => {
            ele.title==="mr"?count1++:count2++;
        
        });
        ele.push(<><div className="label1">
                  Male
                </div>
                    <div className="label2">
                Female
                </div></>)
        }

     let data=[
         {title:"Male",value:count1,color: '#E38627'},
         {title:"Female",value:count2,color: '#C13C37'}
     ]
     
    return(
        <div className="piewrap">
            <div className="piechart">
                <PieChart 
                    data={data} animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    labelPosition={50}
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                />
                {ele[0]}
            </div>
           
        </div>
        
    );
 }

 export default Chart;