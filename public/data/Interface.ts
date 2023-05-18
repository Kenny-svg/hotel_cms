interface MyData {
    id: number;
    category: string;
    room_number: number;
    amount: number;
    beds: string;
    bath: string;
    temp: string;
    isFav: boolean;
  }
  
  const data: MyData[] = require('../../public/data/data.json');