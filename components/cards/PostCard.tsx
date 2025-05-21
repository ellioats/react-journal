import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { CardHeader } from '@mui/material';
import { Post } from '../../types/PostType';
import { useEffect, useState } from 'react';


export default function PostCard({ entry }: { entry: Post }) {

  const [showLimitedTitleText, setLimitStatus] = useState(false);
  const [limitedTextTitle, setLimitedTitle] = useState("");

  // hook that only runs once
  useEffect(() => {
    console.log(`Useeffect: Title length = ${entry.title.length}`);
    if (entry.title.length > 30) {
      setLimitStatus(true);
      const limitArr = entry.title.split(' ');
      let finalText = "";
      for (let x = 0; x < 4; x++) {
        if (x == 3) {
          finalText += ` ${limitArr[x]}...`;
        } else {
          finalText += `${limitArr[x]} `;
        }
      }
      setLimitedTitle(finalText);
    } else {
      console.log("title is not greater than 15 in length...");
    }
  }, [entry.title.length, entry.title])

  return (
    <Card
      sx={{ width: 200 }}
    >

      {!showLimitedTitleText &&
        <CardHeader
          action={
            <IconButton aria-label="settings"></IconButton>
          }
          title={entry.title}
          subheader={`${entry.author} - ${entry.date}`}></CardHeader>

      }

      {showLimitedTitleText &&

        <CardHeader
          action={
            <IconButton aria-label="settings"></IconButton>
          }
          title={limitedTextTitle}
          subheader={`${entry.author} - ${entry.date}`}></CardHeader>

      }

      <CardContent>
        <Typography variant="body2">
          {entry.content}
        </Typography>
      </CardContent>

    </Card >
  );

}
