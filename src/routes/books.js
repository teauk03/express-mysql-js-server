import express from "express";

const router = express.Router();

router.get("/books", (req, res) => {
    res.status(200).json({
        "message": "response ok"
    });
});

router.get("/book/info", (req, res) => {
    res.status(200).json({
        "message": "response ok"
    });
});

router.get("/book/info/add/:id", (req, res) => {
    res.status(200).json({
        "message": "response ok"
    });
});

router.get("/book/info/edit/:id", (req, res) => {
    res.status(200).json({
        "message": "response ok"
    });
});

router.get("/book/info/delete/:id", (req, res) => {
    res.status(200).json({
        "message": "response ok"
    });
});

export default router;