import { NextResponse } from 'next/server';
import Article from '@/models/Article';


class APIfeatures {
    constructor(articles, queryString) {
        this.articles = articles;
        this.queryString = queryString;
    }

    filtering() {
        if (this.queryString.title) {
            this.articles = this.articles.filter(article => article.title.toLowerCase().includes(this.queryString.title.toLowerCase()));
            console.log("Filtered by title:", this.queryString.title);
        }
        
        if (this.queryString.category) {   
            this.articles = this.articles.filter(article => article.category == this.queryString.category) 
        }

        if (this.queryString.subcategory) {   
            this.articles = this.articles.filter(article => article.subcategory == this.queryString.subcategory) 
        }

        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            if (this.queryString.sort === "asc") {
                this.articles = this.articles.sort((a, b) => a.createdAt - b.createdAt);
            } else {
                this.articles = this.articles.sort((a, b) => b.createdAt - a.createdAt);
            }
        }
        return this;
    }
}

export async function GET(request) {
    const articles = await Article.find(); // Create the initial Mongoose query

    const { searchParams } = new URL(request.url);
    const queryString = {};
    for (const [key, value] of searchParams) {
        queryString[key] = value;
    }

    const articleFilter = new APIfeatures(articles, queryString);
    articleFilter.filtering().sorting(); // Apply the filtering and sorting

    const filteredArticles = articleFilter.articles; // Access the filtered and sorted articles

    return NextResponse.json(filteredArticles);
}
