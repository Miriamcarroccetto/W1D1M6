import express from "express";
import Author from "../models/authorsSchema.js";
// const authorRoute = express.Router()

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const authors = await Author.find()
        res.json(authors)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get("/:id", async (req, res) => {

    try {
        const author = await Author.findById(req.params.id)
        res.send(author)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.post("/", async (req, res) => {
    const { name, lastname, email, birthday, avatar } = req.body
    try {

        const newAuthor = new Author({
            name,
            lastname,
            email,
            birthday,
            avatar,
        })

        await newAuthor.save()

        res.status(201).json(newAuthor)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router