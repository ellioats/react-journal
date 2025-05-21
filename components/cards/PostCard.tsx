import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { CardHeader } from '@mui/material';
import { Post } from '../../types/PostType';
import { useEffect, useState } from 'react';

export default function PostCard({ entry }: { entry: Post }) {

  const [showLimitedTitleText, setLimitStatus] = useState(false);
  const [limitedTextTitle, setLimitedTitle] = useState("");
  const [limitedContentText, setlimitedContentText] = useState("");

  // hook that run s each time entry changes (once / call)
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

  // hook that sets a "preview" of the content 
  useEffect(() => {
    const limitedSplitContent = entry.content.split(' ');

    let finalLimitedContent = "";

    const limit = 5;

    if (limitedSplitContent.length <= (limit - 1)) {
      console.log("content is being set as default...")
      finalLimitedContent = entry.content;
    } else {

      console.log("content is using for loop")

      for (let x = 0; x < limit; x++) {
        if (x == limit - 1) {
          finalLimitedContent += " " + limitedSplitContent[x] + "...";
        } else {
          finalLimitedContent += limitedSplitContent[x] + " "
        }
      }
    }


    setlimitedContentText(finalLimitedContent);


  }, [entry.content])



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
          {limitedContentText}
        </Typography>
      </CardContent>

    </Card >
  );

}
