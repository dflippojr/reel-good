import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Card, Form, InputGroup } from "react-bootstrap";
import "../App.css";

function MovieCard({ movie }) {
  // Format each movie entry as a card, just use image and title
  return (
    movie && (
      <Card>
        {movie.poster_path ? (
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ) : (
          <p>No available poster</p>
        )}
        <Card.Title>{movie.title}</Card.Title>
        <a href={`/movies/${movie.id}`} className="stretched-link"></a>
      </Card>
    )
  );
}

export default MovieCard;