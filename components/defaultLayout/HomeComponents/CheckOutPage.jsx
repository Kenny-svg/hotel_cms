import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Label, Select } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  selectDate,
  selectDateTwo,
  selectPerson,
  selectRoom,
  selectRoomNo,
} from "@/features/slices/wishlistSlice";
import Link from "next/link";

const BookingDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedRoomNo, setSelectedRoomNo] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSelectRoomNo = (event) => {
    const selectedRoomNo = event.target.value;
    dispatch(selectRoomNo(selectedRoomNo));
  };

  const handleSelectRoom = (event) => {
    const selectedRoom = event.target.value;
    dispatch(selectRoom(selectedRoom));
  };

  const handleSelectChange = (event) => {
    const selectedPerson = event.target.value;
    dispatch(selectPerson(selectedPerson));
  };

  const handleDateChange = (date) => {
    const selected = date instanceof Date ? date : new Date(date);
    setSelectedDate(selected);
    dispatch(selectDate(selected));
  };
  const handleDateChangeTwo = (date) => {
    const selected = date instanceof Date ? date : new Date(date);
    setSelectedDateTwo(selected);
    dispatch(selectDateTwo(selected));
  };
  const hotels = useSelector((state) => state.wishlist.hotels);

  return (
    <>
      <div className="bg-white p-2 relative z-10 w-10/12 mx-auto shadow-2xl rounded-lg  -mt-24">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="grid md:grid-cols-6 mx-auto w-11/12 mt-10 mb-10 gap-8">
            <MobileDatePicker
              label="Check In"
              selected={selectedDate}
              value={selectedDate}
              onChange={handleDateChange}
              className="custom-datepicker"
              //   renderInput={(params: TextFieldProps) => <TextField {...params} />}
            />

            <MobileDatePicker
              label="Check Out"
              value={selectedDateTwo}
              selected={selectedDateTwo}
              onChange={handleDateChangeTwo}
              className="custom-datepicker"
              //   renderInput={(params: TextFieldProps) => <TextField {...params} />}
            />
            <div className="max-w-full" id="select">
              <div className=" block">
                {/* <Label htmlFor="countries" value="No Of Persons" /> */}
              </div>
              <Select
                id="countries"
                required
                style={{
                  borderRadius: "0.25rem", // Adjust the border radius value as needed
                  paddingTop: "1.1rem", // Adjust the padding value as needed
                  paddingBottom: "1.1rem", // Adjust the padding value as needed
                  border: "1px solid #EAB319", // Replace "yellow" with your preferred color
                }}
                onChange={handleSelectChange}
              >
                <option>--No of people--</option>
                <option>1 Person</option>
                <option>1 Persons</option>
              </Select>
              {selectedPerson && <p>Selected Person: {selectedPerson}</p>}
            </div>
            <div className="">
              <div className="" id="select">
                <Select
                  id="countries"
                  required
                  style={{
                    borderRadius: "0.25rem", // Adjust the border radius value as needed
                    paddingTop: "1.1rem", // Adjust the padding value as needed
                    paddingBottom: "1.1rem", // Adjust the padding value as needed
                    border: "1px solid #EAB319", // Replace "yellow" with your preferred color
                  }}
                  onChange={handleSelectRoom}
                >
                  {hotels.map((item) => (
                    <option key={item.id}>{item.category}</option>
                  ))}
                </Select>
                {selectedRoom && <p>Selected room: {selectedRoom}</p>}
              </div>
            </div>
            <div className="" id="select">
              <Select
                id="countries"
                required
                style={{
                  borderRadius: "0.25rem", // Adjust the border radius value as needed
                  paddingTop: "1.1rem", // Adjust the padding value as needed
                  paddingBottom: "1.1rem", // Adjust the padding value as needed
                  border: "1px solid #EAB319", // Replace "yellow" with your preferred color
                }}
                onChange={handleSelectRoomNo}
              >
                {hotels.map((item) => (
                  <option key={item.id}>{item.room_number}</option>
                ))}
              </Select>
              {selectedRoomNo && <p>Selected roon num: {selectedRoomNo}</p>}
            </div>
            <div className=" w-full">
              <Link href="/checkout">
                <button className="bg-yellow-500 w-full font-bold py-2 text-white rounded-md hover:bg-white hover:text-black border hover:border-black duration-300 transition text-sm p-2">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default BookingDate;
