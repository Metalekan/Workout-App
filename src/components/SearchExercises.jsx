import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchDataN, exerciseOptions } from "../utility/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [isBodyParts, setIsBodyParts] = useState(true)

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchDataN(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  // console.log(bodyParts);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchDataN(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);

      // console.log(searchedExercises);
    }
  };

  return (
    <Stack align-items="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="30px"
        textAlign="center"
      >
        Awesome Exercises you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            },
            width: { lg: "80%", xs: "80%" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          // value=""
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises..."
          type="text"
        ></TextField>
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            width: { lg: "20%", xs: "20%" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={isBodyParts}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
