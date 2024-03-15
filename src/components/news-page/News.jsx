'use client';
import "../../app/globals.css";
import React, {useEffect, useState} from 'react';

import NewsItem from '../news-items/NewsItem';
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { Catamaran } from "next/font/google";

const News = (props)=>{
    let {setProgress, apiKey, pageSize, country, category} = props;
    // if(apiKey===''){
        // console.log("apiKeyx:::",apiKey);
        // console.log("category:::",category);
    // }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews = async ()=> {
        
        
        if (apiKey!=='undefined'){
            // console.log("apiKey:::",apiKey);
            // console.log("category:::",category);
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`; 
            // console.log("url::",url);
            // console.log("apiKey:::",apiKey);
        
            try {
                setProgress(10);
                setLoading(true);
                let data = await fetch(url);
                // console.log("data::",data);
                setProgress(30);
                let parsedData = await data.json();
                // console.log("parsedData::",parsedData);
                setProgress(70);

                // console.log("parsedData :::::::::::::::::::::::::::::::::",parsedData);

                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults);
                setLoading(false);
                setProgress(100);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., set an error state
            }
        }
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {  
        // console.log("apiKeyx:::",apiKey);
        // console.log("countryx:::",category);
        if (apiKey!=='undefined'){
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
            
            try {
                // console.log("url :",url);
                setPage(page+1);
                let data = await fetch(url);
                // console.log("data::",data);
                let parsedData = await data.json();
                // console.log("parsedData::",parsedData);

                setArticles(articles.concat(parsedData.articles));
                setTotalResults(parsedData.totalResults);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., set an error state
            }
        }
    };
      
    //   console.log("articles::",articles);
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsApp - Top {capitalizeFirstLetter(category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles?articles.length:''}
                    next={fetchMoreData}
                    hasMore={articles?articles.length !== totalResults:''}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row"> 
                            {articles && articles.map((element, index) => {
                                return <div className="col-md-4" key={element.url?element.url:''}>
                                    <NewsItem 
                                        title={element.title?element.title:''} 
                                        description={element.description?element.description:''} 
                                        imageUrl={element.urlToImage?element.urlToImage:''} 
                                        newsUrl={element.url?element.url:''} 
                                        author={element.author?element.author:''} 
                                        date={element.publishedAt?element.publishedAt:''} 
                                        source={element.source.name?element.source.name:''} />
                                </div>
                            })}
                        </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
