import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { mergeTypeDefs } from '@graphql-tools/merge'; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connect } from "./database/db.config";
dotenv.config();


const baseSchema = gql(
  readFileSync(path.resolve(__dirname, "./schema/schema.graphql"), {
    encoding: "utf-8",
  })
);

const userSchema = gql(
  readFileSync(path.resolve(__dirname, "./schema/user.schema.graphql"), {
    encoding: "utf-8",
  })
);

// Merge the schemas
const typeDefs = mergeTypeDefs([baseSchema, userSchema]);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs });
  
  const { url } = await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);

    connect().then(()=>{
    }).catch((error)=>{
        console.log(`Database connection error: ${error}`)
    })
}

startApolloServer();
