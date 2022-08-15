import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { ToDoLayout } from "../layout/ToDoLayout"
import { NothingSelectedView, ToDoView } from "../view"

export const ToDoPage = () => {
  return (
    <ToDoLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, minima. Ea quasi impedit facilis? Officia laborum dolorem repudiandae veniam. Officiis rem ab provident architecto repellat doloribus minima facere maiores explicabo.</Typography> */}

      {/* <NothingSelectedView /> */}
      <ToDoView />
      {/* Task */}
      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'addtodo.main',
          ':hover':{backgroundColor:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom: 50 
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </ToDoLayout>
  )
}
