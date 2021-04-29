import React from 'react';
import Header from './Header.js'
import Table from './Table'
import ClipLoader from 'react-spinners/ClipLoader';
class First extends React.Component{
    
    constructor(){
        super();
        this.state={};
        this.loading=true;
        this.exec="";
        this.fetchData=this.fetchData.bind(this);
    }
    
    fetchData(obj){
        const BASE_URL = 'https://dummyapi.io/data/api';
        const APP_ID = '608a8987e635f9121361eaf2';
        fetch(BASE_URL+"/user",{headers:{'app-id':APP_ID}})
        .then(response => response.json())
        .then(data => {obj.setState(data); console.log(document.getElementsByClassName("wrap")[0].style.display="none"); });
        
      }
    componentDidMount(){
        this.exec=setTimeout(this.fetchData,6000,this);
        console.log(this.exec)
        //this.fetchData(this)
      }
    
    render(){
        
        return(
            <div>
                <Header title={"First"} this={this}/>
                <Table state={this.state}/>
                <div className="wrap">
                    <ClipLoader color={"red"} loading={this.loading} size={50} />
                
                </div>
            </div>
         );
    }
}
export default First;