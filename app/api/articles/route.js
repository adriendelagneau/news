import { NextResponse } from "next/server"
import connect from "../../../lib/db";
import Article from "../../../models/Article";

export const GET = async (request) => {

    try {
        await connect()
        const articles = await Article.find()

        return new NextResponse(JSON.stringify(articles), { status: 200})
    } catch(err) {
        return new NextResponse("DB error"+err, { status: 500})
    }
}

export const POST = async (request) => {
    const body = await request.json();
  
    const newArticle = new Article(body);
  
    try {
      await connect();
  
      await newArticle.save();
  
      return new NextResponse("Article has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error"+err, { status: 500 });
    }
  };