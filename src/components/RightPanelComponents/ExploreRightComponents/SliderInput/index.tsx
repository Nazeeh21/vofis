import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

const SliderValue: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="flex items-center">
      <div className="rounded border-2 border-gray-500 p-2 mr-2 font-body">
        {value}
      </div>
      <div>$</div>
    </div>
  );
};

const RangeSlider: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: unknown, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <div className="font-body text-lg font-medium mb-2">{title}</div>
      <div className="w-44">
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
      <div className="flex justify-around w-36 ml-2 items-center">
        <SliderValue value={value[0]} />
        <div>-</div>
        <SliderValue value={value[1]} />
      </div>
    </div>
  );
};

export default RangeSlider;
