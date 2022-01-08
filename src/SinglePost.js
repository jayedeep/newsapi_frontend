import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";
// import './Loader.css';


class SinglePost extends Component {
   
    constructor(props){
        super(props)
        
     
    }
   

    render() {
      
        return (
            <div>
            
                {this.props.newsdata!= null?
                
                 <div className="content-section">
                      
                 <div className="media">
                     <div className="media-body">
                         <div className="article-metadata" style={{textAlign:'left'}}>
                            <a href="#" to={`/user/${this.props.newsdata.author}`} className="mr-2">{this.props.newsdata.author}</a>

                             {/* <a  href="#">{this.props.postdata.auther.username}</a> */}
                             <small className="text-muted">{this.props.newsdata.publishedAt}</small>
                         </div>
                         <h2><span className="article-title" >{this.props.newsdata.title}</span></h2>

                     </div>
                 </div>
                 {this.props.newsdata.urlToImage !== null?
                   <div className="card">
                   <img src={this.props.newsdata.urlToImage} className="img-fluid rounded mx-auto d-block" alt="Responsive image" />
               </div>
               :
               <div></div>
             }
               
                 <div className="card-body">
                     <p className="card-text">
                     {this.props.newsdata.content}
                     </p>
                     <hr />

                </div>
                 
                   
             </div>
        :
        <div className="loader"></div>
            }
               

            </div>
        )
    }
}

export default SinglePost