import { Autocomplete, Box, IconButton, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export function AllPostsPage() {
    const [postName, setPostName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostName(event.target.value);
      };

    return (
        <div style={{width: 1420, margin: "0 auto", marginTop: "70px", paddingBottom: 3}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 150}}>
                <Typography fontSize={32}>
                    Все анкеты:
                </Typography>
                <Box display={"flex"}>
                    <Typography sx={{fontSize: 22, marginTop: "22px", marginRight: 3}}>
                        Поиск по названию: 
                    </Typography>
                    <TextField
                        variant="standard"
                        value={postName}
                        onChange={handleChange}
                        sx={{marginTop: "20px", fontFamily: "Raleway, sans-serif"}}
                    />
                    <IconButton style={{marginTop: 15, marginLeft: 10}}>
                        <SearchIcon style={{fontSize: 30}}/>
                    </IconButton>
                </Box>
            </div>
            <Typography>
                Основные технологии пользователей
            </Typography>
            <Autocomplete
                multiple
                options={tech}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Стек"
                    />
                  )}
                disableCloseOnSelect
            />
        </div>
    );
}

const tech = [
    "java",
    "typescript"
];