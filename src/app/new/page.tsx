import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Page() {

    return (
        <>
            <h1 className="text-2xl font-bold">Create new Post</h1>

            <Box>
                <div className="border-2 decoration-white bg-transparent text-white p-2 border-solid border-white">
                    <TextField id="standard-basic" label="test" variant="standard"></TextField>
                </div>
            </Box>

        </>
    );

}