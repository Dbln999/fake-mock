const express = require('express')
const app = express()
const port = 8080

app.post('/api/game/creategame', (req, res) => {
    return res.json({
        "id": null,
        "type": "ESTONIAN",
        "wordLength": 4,
        "seeds": "õun, väike, õppida, suur, jooksma",
        "translation": "A small apple grows quickly",
        "estonianWords": [
            {
                "id": "929b8772-d110-4613-84ec-4e556168e6fd",
                "estonian": "kasvab",
                "type": "verb",
                "case_D": "",
                "number": "",
                "basicForm": "kasvama",
                "tense": "present",
                "person": "3rd",
                "degree": "",
                "parts": "kasv (growth) + ab (suffix indicating a present tense action)",
                "level_D": 4,
                "englishTranslation": "is growing",
                "basicWordId": "d1eb5c86-299c-4358-86cf-7175082a18b7",
                "state": "ok",
                "errorText": null,
                "created": "2024-11-02T12:33:12.802+00:00"
            },
            {
                "id": "1ee508fa-ffdd-4db1-a404-7b0c8ffc5d58",
                "estonian": "kiiresti",
                "type": "adverb",
                "case_D": "",
                "number": "",
                "basicForm": "kiirest",
                "tense": "",
                "person": "",
                "degree": "",
                "parts": "kiire (fast) + sti (adverbial suffix)",
                "level_D": 3,
                "englishTranslation": "quickly",
                "basicWordId": "cf67f3b1-aaf7-4e87-97cb-4319a13b168f",
                "state": "ok",
                "errorText": null,
                "created": "2024-11-02T12:33:16.097+00:00"
            }
        ],
        "initialSentence": "Väike õun kasvab kiiresti",
        "openTime": "2024-11-02T12:33:10.834+00:00",
        "closeTime": null,
        "tokens": 222,
        "totalPoints": 29,
        "maxPoints": 0,
        "correction": null,
        "step": 2,
        "userID": "c38f66aa-d08c-464d-9471-53b2f81c081f",
        "humanResponse": "the little apple does something quick"
    })
})

app.post('/api/game/resolve', (req, res) => {
    return res.json({
        "id": null,
        "type": "ESTONIAN",
        "wordLength": 4,
        "seeds": "õun, väike, õppida, suur, jooksma",
        "translation": "A small apple grows quickly",
        "estonianWords": [
            {
                "id": "929b8772-d110-4613-84ec-4e556168e6fd",
                "estonian": "kasvab",
                "type": "verb",
                "case_D": "",
                "number": "",
                "basicForm": "kasvama",
                "tense": "present",
                "person": "3rd",
                "degree": "",
                "parts": "kasv (growth) + ab (suffix indicating a present tense action)",
                "level_D": 4,
                "englishTranslation": "is growing",
                "basicWordId": "d1eb5c86-299c-4358-86cf-7175082a18b7",
                "state": "ok",
                "errorText": null,
                "created": "2024-11-02T12:33:12.802+00:00"
            },
            {
                "id": "1ee508fa-ffdd-4db1-a404-7b0c8ffc5d58",
                "estonian": "kiiresti",
                "type": "adverb",
                "case_D": "",
                "number": "",
                "basicForm": "kiirest",
                "tense": "",
                "person": "",
                "degree": "",
                "parts": "kiire (fast) + sti (adverbial suffix)",
                "level_D": 3,
                "englishTranslation": "quickly",
                "basicWordId": "cf67f3b1-aaf7-4e87-97cb-4319a13b168f",
                "state": "ok",
                "errorText": null,
                "created": "2024-11-02T12:33:16.097+00:00"
            }
        ],
        "initialSentence": "Väike õun kasvab kiiresti",
        "openTime": "2024-11-02T12:33:10.834+00:00",
        "closeTime": null,
        "tokens": 222,
        "totalPoints": 29,
        "maxPoints": 0,
        "correction": null,
        "step": 2,
        "userID": "c38f66aa-d08c-464d-9471-53b2f81c081f",
        "humanResponse": "the little apple does something quick"
    })
})

app.post("/api/game/finishGame", (req,res) => {
    return res.json({
        "body": "c38f66aa-d08c-464d-9471-53b2f81c081f",
        "wordList": [
            {
                "estonian": "väike",
                "id": "550e8400-e29b-41d4-a716-446655440114",
                "level": 6
            },
            {
                "estonian": "laps",
                "id": "4f6cb981-0d11-4a78-bc04-91843b33ee72",
                "level": 6
            },
            {
                "estonian": "armastama",
                "id": "088e68e5-10f2-4f8a-8c96-2f8f276ddab8",
                "level": 6
            },
            {
                "estonian": "laulda",
                "id": "2ec03983-4f15-467d-9c68-d0ccc2736fa8",
                "level": 6
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})