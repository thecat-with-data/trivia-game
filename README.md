# TRIVIA GAME

## BY MR. STURM AND PARTIALLY WRITTEN BY ChatGPT

Version 2.0.0

**TODO:**

    * Fix formatting issue on questions that are over 3 <h2> lines long. Maybe you can implement scaling in CSS?
    * Stop elapsed timer after completing the trivia game.

## Tech+ Questions

    This is the Tech+ questions section. The Tech+ questions are stored in the techplus/ directory.
    

## Dockerizing the Project

You can run the trivia game in a container using the provided `Dockerfile`:

```bash
# build the image (run from project root)
docker build -t trivia-game:latest .

# start a container exposing port 80
docker run --rm -p 8080:80 trivia-game:latest
```

Then open `http://localhost:8080/techplus/trivia-game.html` in your browser.

The container simply uses `nginx:alpine` to serve the static files. Adjust as needed for other servers or ports.
