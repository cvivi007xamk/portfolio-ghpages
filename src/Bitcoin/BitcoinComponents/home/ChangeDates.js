import React from "react";
import MyButton from "../MyButton";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import fi from "date-fns/locale/fi";
import DatePicker from "@mui/lab/DatePicker";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "primary.main",
	},
	// "& .MuiInput-underline:after": {
	// 	borderBottomColor: "primary.main",
	// },
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "secondary.contrastText",
		},
		"&:hover fieldset": {
			borderColor: "#AFFBE9",
		},
		"&.Mui-focused fieldset": {
			borderColor: "primary.main",
		},
	},
});

const ChangeDates = (props) => {
	// Onclick changes the api url where to fetch data. This also launches the getData function in Home component as url is a dependency in the useEffect hook.
	const handleClick = () => {
		props.setUrl(
			`https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart/range?vs_currency=eur&from=${props.startDate}&to=${props.endDate}`
		);
	};
	// Get the default values for the datepickers.
	let today = new Date();
	let yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
	const [startValue, setStartValue] = React.useState(yesterday);
	const [endValue, setEndValue] = React.useState(today);

	// console.log("startValue", startValue);
	// console.log("endValue", endValue);
	// console.log("startDateString", startDateString);
	// console.log("endDateString", endDateString);

	return (
		<Box>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={fi}>
				<DatePicker
					label="Start date:"
					maxDate={endValue}
					defaultValue={yesterday}
					value={startValue}
					onChange={(newValue) => {
						// Set the start time as UTC 00:00

						props.setStartDate(Date.parse(newValue) / 1000);
						setStartValue(newValue);
					}}
					renderInput={(params) => (
						<CssTextField
							{...params}
							helperText="dd.mm.yyyy"
							sx={{ marginTop: "20px", marginBottom: "20px" }}
						/>
					)}
				/>
			</LocalizationProvider>
			<br />
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={fi}>
				<DatePicker
					label="End date:"
					minDate={startValue}
					maxDate={today}
					defaultValue={today}
					value={endValue}
					onChange={(newValue) => {
						// Set the end time as UTC 00:00 +1 hour (so 01:00)
						props.setEndDate(Date.parse(newValue) / 1000 + 3600);
						setEndValue(newValue);
					}}
					renderInput={(params) => (
						<CssTextField
							{...params}
							helperText="dd.mm.yyyy"
							sx={{ marginTop: "20px", marginBottom: "20px" }}
						/>
					)}
				/>
			</LocalizationProvider>

			<Box>
				<MyButton onClick={handleClick}>Change Date Range</MyButton>
			</Box>
		</Box>
	);
};

export default ChangeDates;
