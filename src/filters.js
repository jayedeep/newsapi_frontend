import React,{Component} from "react";
import $ from 'jquery'; 

class Filters extends Component{

    constructor(props){
        super(props);
        this.state={
            filter_url:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClear=this.handleClear.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        var all_checkboxs=$(e.target).find('input[type=checkbox]:checked')

        var list_of_category=[]
        for(var i=0;i<all_checkboxs.length;i++){
            list_of_category.push(all_checkboxs[i].value)
            
        }
        
        var filter_url=''
        for(var i=0;i<list_of_category.length;i++){
            filter_url=filter_url+list_of_category[i]+' OR '

        }  
        filter_url=filter_url.slice(0,filter_url.length-4)
        console.log(filter_url,">>>>>>>>>>123")

       
        this.setState({filter_url:filter_url})
        this.props.handleFilter(filter_url)
    }

    handleClear(){
        this.setState({filter_url:''});
        this.props.handleFilter('')
        var all_checkboxs=$('input[type=checkbox]:checked')
        for(var i=0;i<all_checkboxs.length;i++){
            all_checkboxs[i].checked=false;
        }
        all_checkboxs.checked=false;
       
        // window.location.href='http://localhost:3000/'
    }

    render(){

        return(
            <div className="card">
            {this.props.allsource.length !==0?
            <form onSubmit={this.handleSubmit}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item p-0">
                    <h5 className="card-header">Category</h5>
                    <ul className="list-group list-group-flush" style={{height:'20vh',overflowY:'auto'}}>
                        {this.props.allsource.map((h)=>
                     
                        <li className="list-group-item" key={h}>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={h} id={h} />
                        <label className="form-check-label" htmlFor={h}>
                        {h}
                        </label>
                        </div>
                        </li>
                        )}
                    </ul>
                    </li>
                
                    <li className="list-group-item text-center">
                    <button className="btn btn-primary" type="submit">Apply</button>
                    </li>
                    {this.state.filter_url!=''?
                        <li className="list-group-item text-center">
                        <button className="btn btn-danger clear_btn" onClick={this.handleClear}>Clear</button>
                        </li>
                        :'' 
                    }

                </ul>
                </form>
                :
                ''

            }
            
                </div>  
        )
    }
}

export default Filters