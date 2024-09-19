import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // For loading .env file

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env file globally
    TypeOrmModule.forRoot({
      type: "postgres", // Specify PostgreSQL as the database type
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "Tamilore1999",
      database: "postgres",
      autoLoadEntities: true, // Automatically load entities (optional)
      synchronize: true, // Use only for development to sync the database schema
    }),
    // Other modules go here
  ],
})
export class AppModule {}
