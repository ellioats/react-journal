import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Page() {

  return (
    <>
      <h1 className="text-2xl font-bold">Create new Post</h1>

      <Box>
        <div className="flex flex-row gap-6">
          <div className="inline-flex decoration-white bg-transparent text-white">
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              sx={{ width: '120px', top: '-20px', left: '10px' }}></TextField>
          </div>
          <TextField
            id="standard-basic2"
            label="Author"
            variant="standard"
            sx={{ width: '120px', top: '-20px', left: '10px' }}
          >

          </TextField>
        </div>

        <div>
          <TextField
            id="multiline-static"
            label="Write here!"
            multiline
            rows={16}
            defaultValue="Once upon a time..."
            variant="standard"
            sx={{ width: '100%', height: '100%' }}
          />
        </div>
      </Box>
    </>
  );

}
