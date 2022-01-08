import React,{Component} from "react";
import Slider from "./Slider";
import SinglePost from "./SinglePost";
import "./Loader.css";
import './style.css'


const baseURL = 'https://newsapi.org/v2/';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          posts:[],
          search_value:'',
          allnews:[],
          allsource:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.searchPost=this.searchPost.bind(this);
        this.clearPost=this.clearPost.bind(this);
        this.FilterPost=this.FilterPost.bind(this);
      }

      FilterPost(filter_url){
        var self=this;
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        
        if(filter_url!==''){
          const proxyUrl = "https://cors-anywhere.herokuapp.com/"
          const qInTitle = '';
          const from = "";
          const q=this.state.search_value;
          const apiKey = "9e846a7f5e5440e2a99af0d9eaeb2801";
          const url = `${proxyUrl}https://newsapi.org/v2/everything?q=${q}&qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
          const request = new Request(url);
          
          fetch(request)
            .then(response => response.json())
            .then((news) => {
            
              this.setState({allnews:news.articles});
              this.setState({allsource: [...new Set(news.articles.filter(x=>x.source.id!=null).map(x=>x.source.id))]})
            
            })
            .catch(error => {
              console.log(error);
            });

        }
        var list_of_filtered=[]
        for (var i=0;i<filter_url.split('OR').length;i++){
          // console.log("><<<<<<<<<<<<<<<<",this.state.allnews.filter(x=>x.source.name==filter_url.split('OR')[i].trim()),filter_url.split('OR')[i].trim())
          list_of_filtered.push(this.state.allnews.filter(x=>x.source.name == filter_url.split('OR')[i].trim()))

        }
        this.setState({allnews:list_of_filtered});


      }
      handleChange(e){
        e.preventDefault();
        this.setState({search_value:e.target.value})
      }

      searchPost(e){
        e.preventDefault();
        var self=this;

          const proxyUrl = "https://cors-anywhere.herokuapp.com/"
          const qInTitle = '';
          const from = "";
          const q='bitcoin';
          const apiKey = "9e846a7f5e5440e2a99af0d9eaeb2801";
          const url = `${proxyUrl}https://newsapi.org/v2/everything?q=${q}&qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
          const request = new Request(url);
          
          fetch(request)
            .then(response => response.json())
            .then((news) => {
            
              this.setState({allnews:news.articles});
              this.setState({allsource: [...new Set(news.articles.filter(x=>x.source.id!=null).map(x=>x.source.id))]})
            
            })
            .catch(error => {
              console.log(error);
            });


      }
      async clearPost(e){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const qInTitle = "";
        const from = "";
        const q='bitcoin';
        const apiKey = "9e846a7f5e5440e2a99af0d9eaeb2801";
        const url = `${proxyUrl}https://newsapi.org/v2/everything?q=${q}&qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
        const request = new Request(url);
        
        fetch(request)
          .then(response => response.json())
          .then((news) => {
          
            this.setState({allnews:news.articles});
            this.setState({allsource: [...new Set(news.articles.filter(x=>x.source.id!=null).map(x=>x.source.id))]})
          
          })
          .catch(error => {
            console.log(error);
          });
     
      }
      
      
      
      async componentDidMount() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const qInTitle = "";
        const from = "";
        const q='bitcoin';
        const apiKey = "9e846a7f5e5440e2a99af0d9eaeb2801";
        const url = `${proxyUrl}https://newsapi.org/v2/everything?q=${q}&qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
        const request = new Request(url);
        
        fetch(request)
          .then(response => response.json())
          .then((news) => {
          
            this.setState({allnews:news.articles});
            this.setState({allsource: [...new Set(news.articles.filter(x=>x.source.id!=null).map(x=>x.source.id))]})
          
          })
          .catch(error => {
            console.log(error);
          });

      }

    render(){
        return(
            <div>
                 <div>
                
                <div className="wrap col-md-10 offset-md-1">
                <div className="search">
                    <input type="text" className="searchTerm" onChange={this.handleChange} placeholder="What are you looking for?" value={this.state.search_value}/>
                    <button type="submit" onClick={this.searchPost} className="searchButton">
                      <i className="fa fa-search"></i>
                  </button>
                  <button type="submit" onClick={this.clearPost} className="clearButton">
                      <i className="fa fa-trash-alt"></i>
                  </button>
                </div>
              </div>
              <div className="row">
              <div className="col-md-4">
             
                  <Slider allsource={this.state.allsource} FilterPost={this.FilterPost}/>
                  </div>
                  <div className="col-md-8">
                      {this.state.allnews.length==0?
                      <div className="content-section">
                        <div className="media">
                        <div className="loader"></div>
                          </div>
                        </div>
                      :
                      this.state.allnews.map((h,i)=>
                        <SinglePost key={i} newsdata={h} />
                      )
                      
                      }
                      
                
                  </div>
                  
              </div>
              </div>
  
            </div>
        )
    }
}

export default Home
