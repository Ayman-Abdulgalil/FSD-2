import { useState } from 'react'
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Alert,
  Chip,
  Avatar,
  Stack,
  Slider,
  Switch,
  FormControlLabel,
  Rating,
  LinearProgress,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper
} from '@mui/material'
import {
  Favorite,
  ExpandMore,
  Delete,
  Edit,
  Share,
  CloudUpload
} from '@mui/icons-material'

function MaterialUIDemo() {
  const [sliderValue, setSliderValue] = useState(30)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [rating, setRating] = useState(3.5)

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Material-UI Component Examples
      </Typography>

      <Grid container spacing={3}>
        {/* Buttons Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Buttons</Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary" startIcon={<Favorite />}>
                  With Icon
                </Button>
                <Button variant="contained" color="error" endIcon={<Delete />}>
                  Delete
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* Form Inputs */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Form Inputs</Typography>
            <Stack spacing={2}>
              <TextField label="Standard" variant="standard" />
              <TextField label="Filled" variant="filled" />
              <TextField label="Outlined" variant="outlined" />
              <TextField label="With helper text" helperText="Some important text" />
            </Stack>
          </Paper>
        </Grid>

        {/* Cards */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Sample Card
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                This is a Material-UI card component with various elements
                showcasing the design system.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<Edit />}>Edit</Button>
              <Button size="small" startIcon={<Share />}>Share</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Chips & Avatars */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Chips & Avatars</Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <Chip label="Basic Chip" />
                <Chip label="Clickable" onClick={() => {}} color="primary" />
                <Chip label="Deletable" onDelete={() => {}} color="secondary" />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>M</Avatar>} label="With Avatar" />
                <Chip icon={<Favorite />} label="With Icon" variant="outlined" />
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Alert severity="success">This is a success alert!</Alert>
            <Alert severity="info">This is an info alert!</Alert>
            <Alert severity="warning">This is a warning alert!</Alert>
            <Alert severity="error">This is an error alert!</Alert>
          </Stack>
        </Grid>

        {/* Interactive Controls */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Interactive Controls</Typography>
            <Stack spacing={3}>
              <div>
                <Typography gutterBottom>Slider: {sliderValue}</Typography>
                <Slider
                  value={sliderValue}
                  onChange={(e, v) => setSliderValue(v)}
                  valueLabelDisplay="auto"
                />
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                }
                label="Toggle Switch"
              />
              <div>
                <Typography gutterBottom>Rating</Typography>
                <Rating
                  value={rating}
                  onChange={(e, v) => setRating(v)}
                  precision={0.5}
                />
              </div>
            </Stack>
          </Paper>
        </Grid>

        {/* Progress Indicators */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Progress Indicators</Typography>
            <Stack spacing={3}>
              <div>
                <Typography gutterBottom>Linear Progress</Typography>
                <LinearProgress variant="determinate" value={sliderValue} />
              </div>
              <div>
                <Typography gutterBottom>Circular Progress</Typography>
                <Stack direction="row" spacing={2}>
                  <CircularProgress />
                  <CircularProgress variant="determinate" value={sliderValue} />
                </Stack>
              </div>
            </Stack>
          </Paper>
        </Grid>

        {/* Accordions */}
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the content of the first accordion. Material-UI makes it
                easy to create expandable sections.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can add any content inside accordion details, including other
                components.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  )
}

export default MaterialUIDemo