const room_data = [
  {
    id: 0,
    x: 13,
    y: 16,
    title: "Room 0",
    n: 4,
    s: 8,
    e: 1,
    w: 3,
    description: "There are exits to the north south east west ",
    items: ["pellet"]
  },
  {
    id: 1,
    x: 14,
    y: 16,
    title: "Room 1",
    n: 7,
    s: 2,
    e: 22,
    w: 0,
    description: "There are exits to the north south east west ",
    items: ["Clyde"]
  },
  {
    id: 2,
    x: 14,
    y: 15,
    title: "Room 2",
    n: 1,
    s: 5,
    e: 10,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 3,
    x: 12,
    y: 16,
    title: "Room 3",
    n: 21,
    e: 0,
    w: 11,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 4,
    x: 13,
    y: 17,
    title: "Room 4",
    s: 0,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 5,
    x: 14,
    y: 14,
    title: "Room 5",
    n: 2,
    s: 50,
    w: 6,
    description: "There are exits to the north south west ",
    items: ["Inky"]
  },
  {
    id: 6,
    x: 13,
    y: 14,
    title: "Room 6",
    s: 62,
    e: 5,
    w: 23,
    description: "There are exits to the south east west ",
    items: ["pellet"]
  },
  {
    id: 7,
    x: 14,
    y: 17,
    title: "Room 7",
    n: 9,
    s: 1,
    e: 12,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 8,
    x: 13,
    y: 15,
    title: "Room 8",
    n: 0,
    w: 16,
    description: "There are exits to the north west ",
    items: ["pellet"]
  },
  {
    id: 9,
    x: 14,
    y: 18,
    title: "Room 9",
    s: 7,
    w: 13,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 10,
    x: 15,
    y: 15,
    title: "Room 10",
    s: 38,
    w: 2,
    description: "There are exits to the south west ",
    items: ["power pellet"]
  },
  {
    id: 11,
    x: 11,
    y: 16,
    title: "Room 11",
    s: 80,
    e: 3,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 12,
    x: 15,
    y: 17,
    title: "Room 12",
    n: 20,
    e: 18,
    w: 7,
    description: "There are exits to the north east west ",
    items: ["pellet"]
  },
  {
    id: 13,
    x: 13,
    y: 18,
    title: "Room 13",
    n: 14,
    e: 9,
    w: 15,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 14,
    x: 13,
    y: 19,
    title: "Room 14",
    n: 17,
    s: 13,
    w: 47,
    description: "There are exits to the north south west ",
    items: ["power pellet"]
  },
  {
    id: 15,
    x: 12,
    y: 18,
    title: "Room 15",
    e: 13,
    w: 19,
    description: "There are exits to the east west ",
    items: ["Clyde"]
  },
  {
    id: 16,
    x: 12,
    y: 15,
    title: "Room 16",
    e: 8,
    description: "There are exits to the east ",
    items: ["Clyde"]
  },
  {
    id: 17,
    x: 13,
    y: 20,
    title: "Room 17",
    n: 33,
    s: 14,
    e: 28,
    w: 46,
    description: "There are exits to the north south east west ",
    items: []
  },
  {
    id: 18,
    x: 16,
    y: 17,
    title: "Room 18",
    s: 24,
    e: 34,
    w: 12,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 19,
    x: 11,
    y: 18,
    title: "Room 19",
    n: 32,
    e: 15,
    w: 40,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 20,
    x: 15,
    y: 18,
    title: "Room 20",
    n: 31,
    s: 12,
    e: 26,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 21,
    x: 12,
    y: 17,
    title: "Room 21",
    s: 3,
    w: 36,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 22,
    x: 15,
    y: 16,
    title: "Room 22",
    w: 1,
    description: "There are exits to the west ",
    items: ["Blinky"]
  },
  {
    id: 23,
    x: 12,
    y: 14,
    title: "Room 23",
    s: 57,
    e: 6,
    w: 58,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 24,
    x: 16,
    y: 16,
    title: "Room 24",
    n: 18,
    s: 29,
    e: 25,
    description: "There are exits to the north south east ",
    items: ["power pellet"]
  },
  {
    id: 25,
    x: 17,
    y: 16,
    title: "Room 25",
    s: 43,
    w: 24,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 26,
    x: 16,
    y: 18,
    title: "Room 26",
    n: 27,
    w: 20,
    description: "There are exits to the north west ",
    items: ["power pellet"]
  },
  {
    id: 27,
    x: 16,
    y: 19,
    title: "Room 27",
    s: 26,
    e: 55,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 28,
    x: 14,
    y: 20,
    title: "Room 28",
    n: 60,
    s: 30,
    w: 17,
    description: "There are exits to the north south west ",
    items: ["power pellet"]
  },
  {
    id: 29,
    x: 16,
    y: 15,
    title: "Room 29",
    n: 24,
    s: 54,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 30,
    x: 14,
    y: 19,
    title: "Room 30",
    n: 28,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 31,
    x: 15,
    y: 19,
    title: "Room 31",
    n: 37,
    s: 20,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 32,
    x: 11,
    y: 19,
    title: "Room 32",
    s: 19,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 33,
    x: 13,
    y: 21,
    title: "Room 33",
    s: 17,
    description: "There are exits to the south ",
    items: ["pellet"]
  },
  {
    id: 34,
    x: 17,
    y: 17,
    title: "Room 34",
    n: 35,
    e: 39,
    w: 18,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 35,
    x: 17,
    y: 18,
    title: "Room 35",
    s: 34,
    e: 44,
    description: "There are exits to the south east ",
    items: ["Blinky"]
  },
  {
    id: 36,
    x: 11,
    y: 17,
    title: "Room 36",
    e: 21,
    w: 41,
    description: "There are exits to the east west ",
    items: ["Clyde"]
  },
  {
    id: 37,
    x: 15,
    y: 20,
    title: "Room 37",
    n: 91,
    s: 31,
    e: 42,
    description: "There are exits to the north south east ",
    items: ["pellet"]
  },
  {
    id: 38,
    x: 15,
    y: 14,
    title: "Room 38",
    n: 10,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 39,
    x: 18,
    y: 17,
    title: "Room 39",
    s: 52,
    e: 71,
    w: 34,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 40,
    x: 10,
    y: 18,
    title: "Room 40",
    n: 74,
    e: 19,
    w: 45,
    description: "There are exits to the north east west ",
    items: ["Clyde"]
  },
  {
    id: 41,
    x: 10,
    y: 17,
    title: "Room 41",
    s: 76,
    e: 36,
    w: 69,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 42,
    x: 16,
    y: 20,
    title: "Room 42",
    n: 51,
    w: 37,
    description: "There are exits to the north west ",
    items: ["Clyde"]
  },
  {
    id: 43,
    x: 17,
    y: 15,
    title: "Room 43",
    n: 25,
    s: 77,
    e: 49,
    description: "There are exits to the north south east ",
    items: ["Blinky"]
  },
  {
    id: 44,
    x: 18,
    y: 18,
    title: "Room 44",
    n: 48,
    e: 59,
    w: 35,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 45,
    x: 9,
    y: 18,
    title: "Room 45",
    n: 85,
    e: 40,
    w: 81,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 46,
    x: 12,
    y: 20,
    title: "Room 46",
    n: 61,
    e: 17,
    w: 79,
    description: "There are exits to the north east west ",
    items: ["pellet"]
  },
  {
    id: 47,
    x: 12,
    y: 19,
    title: "Room 47",
    e: 14,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 48,
    x: 18,
    y: 19,
    title: "Room 48",
    s: 44,
    e: 53,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 49,
    x: 18,
    y: 15,
    title: "Room 49",
    e: 119,
    w: 43,
    description: "There are exits to the east west ",
    items: ["pellet"]
  },
  {
    id: 50,
    x: 14,
    y: 13,
    title: "Room 50",
    n: 5,
    s: 66,
    e: 70,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 51,
    x: 16,
    y: 21,
    title: "Room 51",
    n: 93,
    s: 42,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 52,
    x: 18,
    y: 16,
    title: "Room 52",
    n: 39,
    description: "There are exits to the north ",
    items: ["pellet"]
  },
  {
    id: 53,
    x: 19,
    y: 19,
    title: "Room 53",
    n: 75,
    w: 48,
    description: "There are exits to the north west ",
    items: ["Inky"]
  },
  {
    id: 54,
    x: 16,
    y: 14,
    title: "Room 54",
    n: 29,
    description: "There are exits to the north ",
    items: ["Clyde"]
  },
  {
    id: 55,
    x: 17,
    y: 19,
    title: "Room 55",
    n: 56,
    w: 27,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 56,
    x: 17,
    y: 20,
    title: "Room 56",
    n: 73,
    s: 55,
    e: 67,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 57,
    x: 12,
    y: 13,
    title: "Room 57",
    n: 23,
    s: 94,
    w: 68,
    description: "There are exits to the north south west ",
    items: ["power pellet"]
  },
  {
    id: 58,
    x: 11,
    y: 14,
    title: "Room 58",
    e: 23,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 59,
    x: 19,
    y: 18,
    title: "Room 59",
    e: 189,
    w: 44,
    description: "There are exits to the east west ",
    items: ["Inky"]
  },
  {
    id: 60,
    x: 14,
    y: 21,
    title: "Room 60",
    n: 64,
    s: 28,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 61,
    x: 12,
    y: 21,
    title: "Room 61",
    n: 82,
    s: 46,
    w: 63,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 62,
    x: 13,
    y: 13,
    title: "Room 62",
    n: 6,
    s: 65,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 63,
    x: 11,
    y: 21,
    title: "Room 63",
    n: 140,
    e: 61,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 64,
    x: 14,
    y: 22,
    title: "Room 64",
    n: 111,
    s: 60,
    w: 102,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 65,
    x: 13,
    y: 12,
    title: "Room 65",
    n: 62,
    s: 134,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 66,
    x: 14,
    y: 12,
    title: "Room 66",
    n: 50,
    s: 96,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 67,
    x: 18,
    y: 20,
    title: "Room 67",
    n: 84,
    w: 56,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 68,
    x: 11,
    y: 13,
    title: "Room 68",
    e: 57,
    description: "There are exits to the east ",
    items: ["pellet"]
  },
  {
    id: 69,
    x: 9,
    y: 17,
    title: "Room 69",
    s: 72,
    e: 41,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 70,
    x: 15,
    y: 13,
    title: "Room 70",
    s: 116,
    e: 87,
    w: 50,
    description: "There are exits to the south east west ",
    items: ["Inky"]
  },
  {
    id: 71,
    x: 19,
    y: 17,
    title: "Room 71",
    s: 115,
    e: 150,
    w: 39,
    description: "There are exits to the south east west ",
    items: ["Blinky"]
  },
  {
    id: 72,
    x: 9,
    y: 16,
    title: "Room 72",
    n: 69,
    s: 89,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 73,
    x: 17,
    y: 21,
    title: "Room 73",
    n: 132,
    s: 56,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 74,
    x: 10,
    y: 19,
    title: "Room 74",
    s: 40,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 75,
    x: 19,
    y: 20,
    title: "Room 75",
    n: 78,
    s: 53,
    e: 88,
    description: "There are exits to the north south east ",
    items: ["pellet"]
  },
  {
    id: 76,
    x: 10,
    y: 16,
    title: "Room 76",
    n: 41,
    description: "There are exits to the north ",
    items: ["Inky"]
  },
  {
    id: 77,
    x: 17,
    y: 14,
    title: "Room 77",
    n: 43,
    e: 130,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 78,
    x: 19,
    y: 21,
    title: "Room 78",
    s: 75,
    e: 90,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 79,
    x: 11,
    y: 20,
    title: "Room 79",
    e: 46,
    w: 106,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 80,
    x: 11,
    y: 15,
    title: "Room 80",
    n: 11,
    w: 83,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 81,
    x: 8,
    y: 18,
    title: "Room 81",
    n: 137,
    s: 92,
    e: 45,
    w: 108,
    description: "There are exits to the north south east west ",
    items: []
  },
  {
    id: 82,
    x: 12,
    y: 22,
    title: "Room 82",
    n: 155,
    s: 61,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 83,
    x: 10,
    y: 15,
    title: "Room 83",
    s: 99,
    e: 80,
    description: "There are exits to the south east ",
    items: ["pellet"]
  },
  {
    id: 84,
    x: 18,
    y: 21,
    title: "Room 84",
    n: 86,
    s: 67,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 85,
    x: 9,
    y: 19,
    title: "Room 85",
    s: 45,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 86,
    x: 18,
    y: 22,
    title: "Room 86",
    n: 146,
    s: 84,
    e: 95,
    description: "There are exits to the north south east ",
    items: ["Clyde"]
  },
  {
    id: 87,
    x: 16,
    y: 13,
    title: "Room 87",
    s: 117,
    w: 70,
    description: "There are exits to the south west ",
    items: ["Inky"]
  },
  {
    id: 88,
    x: 20,
    y: 20,
    title: "Room 88",
    s: 103,
    e: 125,
    w: 75,
    description: "There are exits to the south east west ",
    items: ["Inky"]
  },
  {
    id: 89,
    x: 9,
    y: 15,
    title: "Room 89",
    n: 72,
    s: 104,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 90,
    x: 20,
    y: 21,
    title: "Room 90",
    n: 98,
    e: 142,
    w: 78,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 91,
    x: 15,
    y: 21,
    title: "Room 91",
    n: 101,
    s: 37,
    description: "There are exits to the north south ",
    items: ["pellet"]
  },
  {
    id: 92,
    x: 8,
    y: 17,
    title: "Room 92",
    n: 81,
    s: 100,
    w: 128,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 93,
    x: 16,
    y: 22,
    title: "Room 93",
    s: 51,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 94,
    x: 12,
    y: 12,
    title: "Room 94",
    n: 57,
    s: 97,
    w: 113,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 95,
    x: 19,
    y: 22,
    title: "Room 95",
    n: 109,
    w: 86,
    description: "There are exits to the north west ",
    items: ["Clyde"]
  },
  {
    id: 96,
    x: 14,
    y: 11,
    title: "Room 96",
    n: 66,
    s: 179,
    description: "There are exits to the north south ",
    items: ["Clyde"]
  },
  {
    id: 97,
    x: 12,
    y: 11,
    title: "Room 97",
    n: 94,
    s: 110,
    w: 153,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 98,
    x: 20,
    y: 22,
    title: "Room 98",
    n: 186,
    s: 90,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 99,
    x: 10,
    y: 14,
    title: "Room 99",
    n: 83,
    s: 122,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 100,
    x: 8,
    y: 16,
    title: "Room 100",
    n: 92,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 101,
    x: 15,
    y: 22,
    title: "Room 101",
    s: 91,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 102,
    x: 13,
    y: 22,
    title: "Room 102",
    n: 107,
    e: 64,
    description: "There are exits to the north east ",
    items: ["Pinky"]
  },
  {
    id: 103,
    x: 20,
    y: 19,
    title: "Room 103",
    n: 88,
    description: "There are exits to the north ",
    items: ["pellet"]
  },
  {
    id: 104,
    x: 9,
    y: 14,
    title: "Room 104",
    n: 89,
    s: 126,
    w: 105,
    description: "There are exits to the north south west ",
    items: ["Inky"]
  },
  {
    id: 105,
    x: 8,
    y: 14,
    title: "Room 105",
    n: 129,
    e: 104,
    w: 225,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 106,
    x: 10,
    y: 20,
    title: "Room 106",
    n: 161,
    e: 79,
    w: 112,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 107,
    x: 13,
    y: 23,
    title: "Room 107",
    n: 141,
    s: 102,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 108,
    x: 7,
    y: 18,
    title: "Room 108",
    e: 81,
    w: 167,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 109,
    x: 19,
    y: 23,
    title: "Room 109",
    n: 136,
    s: 95,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 110,
    x: 12,
    y: 10,
    title: "Room 110",
    n: 97,
    s: 118,
    w: 157,
    description: "There are exits to the north south west ",
    items: ["Blinky"]
  },
  {
    id: 111,
    x: 14,
    y: 23,
    title: "Room 111",
    n: 121,
    s: 64,
    e: 114,
    description: "There are exits to the north south east ",
    items: ["Inky"]
  },
  {
    id: 112,
    x: 9,
    y: 20,
    title: "Room 112",
    n: 210,
    e: 106,
    w: 124,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 113,
    x: 11,
    y: 12,
    title: "Room 113",
    e: 94,
    w: 145,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 114,
    x: 15,
    y: 23,
    title: "Room 114",
    e: 120,
    w: 111,
    description: "There are exits to the east west ",
    items: ["power pellet"]
  },
  {
    id: 115,
    x: 19,
    y: 16,
    title: "Room 115",
    n: 71,
    e: 160,
    description: "There are exits to the north east ",
    items: ["Blinky"]
  },
  {
    id: 116,
    x: 15,
    y: 12,
    title: "Room 116",
    n: 70,
    s: 159,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 117,
    x: 16,
    y: 12,
    title: "Room 117",
    n: 87,
    s: 127,
    e: 170,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 118,
    x: 12,
    y: 9,
    title: "Room 118",
    n: 110,
    e: 218,
    w: 133,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 119,
    x: 19,
    y: 15,
    title: "Room 119",
    s: 219,
    e: 131,
    w: 49,
    description: "There are exits to the south east west ",
    items: ["Inky"]
  },
  {
    id: 120,
    x: 16,
    y: 23,
    title: "Room 120",
    w: 114,
    description: "There are exits to the west ",
    items: ["Blinky"]
  },
  {
    id: 121,
    x: 14,
    y: 24,
    title: "Room 121",
    n: 148,
    s: 111,
    e: 123,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 122,
    x: 10,
    y: 13,
    title: "Room 122",
    n: 99,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 123,
    x: 15,
    y: 24,
    title: "Room 123",
    e: 138,
    w: 121,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 124,
    x: 8,
    y: 20,
    title: "Room 124",
    n: 174,
    e: 112,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 125,
    x: 21,
    y: 20,
    title: "Room 125",
    s: 198,
    e: 238,
    w: 88,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 126,
    x: 9,
    y: 13,
    title: "Room 126",
    n: 104,
    s: 135,
    w: 158,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 127,
    x: 16,
    y: 11,
    title: "Room 127",
    n: 117,
    s: 212,
    e: 173,
    description: "There are exits to the north south east ",
    items: ["Blinky"]
  },
  {
    id: 128,
    x: 7,
    y: 17,
    title: "Room 128",
    s: 162,
    e: 92,
    w: 194,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 129,
    x: 8,
    y: 15,
    title: "Room 129",
    s: 105,
    w: 190,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 130,
    x: 18,
    y: 14,
    title: "Room 130",
    w: 77,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 131,
    x: 20,
    y: 15,
    title: "Room 131",
    e: 329,
    w: 119,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 132,
    x: 17,
    y: 22,
    title: "Room 132",
    n: 172,
    s: 73,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 133,
    x: 11,
    y: 9,
    title: "Room 133",
    s: 234,
    e: 118,
    w: 151,
    description: "There are exits to the south east west ",
    items: ["Blinky"]
  },
  {
    id: 134,
    x: 13,
    y: 11,
    title: "Room 134",
    n: 65,
    s: 144,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 135,
    x: 9,
    y: 12,
    title: "Room 135",
    n: 126,
    s: 149,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 136,
    x: 19,
    y: 24,
    title: "Room 136",
    s: 109,
    e: 231,
    description: "There are exits to the south east ",
    items: ["Inky"]
  },
  {
    id: 137,
    x: 8,
    y: 19,
    title: "Room 137",
    s: 81,
    w: 168,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 138,
    x: 16,
    y: 24,
    title: "Room 138",
    n: 143,
    e: 139,
    w: 123,
    description: "There are exits to the north east west ",
    items: ["pellet"]
  },
  {
    id: 139,
    x: 17,
    y: 24,
    title: "Room 139",
    n: 147,
    e: 176,
    w: 138,
    description: "There are exits to the north east west ",
    items: ["Clyde"]
  },
  {
    id: 140,
    x: 11,
    y: 22,
    title: "Room 140",
    s: 63,
    description: "There are exits to the south ",
    items: ["Inky"]
  },
  {
    id: 141,
    x: 13,
    y: 24,
    title: "Room 141",
    s: 107,
    w: 175,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 142,
    x: 21,
    y: 21,
    title: "Room 142",
    n: 245,
    w: 90,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 143,
    x: 16,
    y: 25,
    title: "Room 143",
    s: 138,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 144,
    x: 13,
    y: 10,
    title: "Room 144",
    n: 134,
    s: 218,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 145,
    x: 10,
    y: 12,
    title: "Room 145",
    s: 183,
    e: 113,
    description: "There are exits to the south east ",
    items: ["Inky"]
  },
  {
    id: 146,
    x: 18,
    y: 23,
    title: "Room 146",
    s: 86,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 147,
    x: 17,
    y: 25,
    title: "Room 147",
    n: 152,
    s: 139,
    e: 154,
    description: "There are exits to the north south east ",
    items: ["Inky"]
  },
  {
    id: 148,
    x: 14,
    y: 25,
    title: "Room 148",
    n: 163,
    s: 121,
    e: 178,
    description: "There are exits to the north south east ",
    items: ["Clyde"]
  },
  {
    id: 149,
    x: 9,
    y: 11,
    title: "Room 149",
    n: 135,
    s: 191,
    w: 156,
    description: "There are exits to the north south west ",
    items: ["Blinky"]
  },
  {
    id: 150,
    x: 20,
    y: 17,
    title: "Room 150",
    e: 251,
    w: 71,
    description: "There are exits to the east west ",
    items: ["Clyde"]
  },
  {
    id: 151,
    x: 10,
    y: 9,
    title: "Room 151",
    n: 188,
    e: 133,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 152,
    x: 17,
    y: 26,
    title: "Room 152",
    n: 196,
    s: 147,
    w: 233,
    description: "There are exits to the north south west ",
    items: ["Clyde"]
  },
  {
    id: 153,
    x: 11,
    y: 11,
    title: "Room 153",
    e: 97,
    description: "There are exits to the east ",
    items: ["pellet"]
  },
  {
    id: 154,
    x: 18,
    y: 25,
    title: "Room 154",
    n: 192,
    e: 184,
    w: 147,
    description: "There are exits to the north east west ",
    items: ["Blinky"]
  },
  {
    id: 155,
    x: 12,
    y: 23,
    title: "Room 155",
    s: 82,
    w: 185,
    description: "There are exits to the south west ",
    items: ["Inky"]
  },
  {
    id: 156,
    x: 8,
    y: 11,
    title: "Room 156",
    s: 209,
    e: 149,
    w: 177,
    description: "There are exits to the south east west ",
    items: ["Clyde"]
  },
  {
    id: 157,
    x: 11,
    y: 10,
    title: "Room 157",
    e: 110,
    description: "There are exits to the east ",
    items: ["Inky"]
  },
  {
    id: 158,
    x: 8,
    y: 13,
    title: "Room 158",
    s: 164,
    e: 126,
    w: 235,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 159,
    x: 15,
    y: 11,
    title: "Room 159",
    n: 116,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 160,
    x: 20,
    y: 16,
    title: "Room 160",
    e: 214,
    w: 115,
    description: "There are exits to the east west ",
    items: ["pellet"]
  },
  {
    id: 161,
    x: 10,
    y: 21,
    title: "Room 161",
    n: 166,
    s: 106,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 162,
    x: 7,
    y: 16,
    title: "Room 162",
    n: 128,
    w: 205,
    description: "There are exits to the north west ",
    items: ["Pinky"]
  },
  {
    id: 163,
    x: 14,
    y: 26,
    title: "Room 163",
    n: 257,
    s: 148,
    e: 228,
    w: 165,
    description: "There are exits to the north south east west ",
    items: []
  },
  {
    id: 164,
    x: 8,
    y: 12,
    title: "Room 164",
    n: 158,
    w: 180,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 165,
    x: 13,
    y: 26,
    title: "Room 165",
    n: 169,
    e: 163,
    w: 197,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 166,
    x: 10,
    y: 22,
    title: "Room 166",
    s: 161,
    w: 208,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 167,
    x: 6,
    y: 18,
    title: "Room 167",
    e: 108,
    w: 187,
    description: "There are exits to the east west ",
    items: ["Pinky"]
  },
  {
    id: 168,
    x: 7,
    y: 19,
    title: "Room 168",
    n: 207,
    e: 137,
    w: 171,
    description: "There are exits to the north east west ",
    items: ["Inky"]
  },
  {
    id: 169,
    x: 13,
    y: 27,
    title: "Room 169",
    n: 385,
    s: 165,
    w: 223,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 170,
    x: 17,
    y: 12,
    title: "Room 170",
    n: 182,
    w: 117,
    description: "There are exits to the north west ",
    items: ["Clyde"]
  },
  {
    id: 171,
    x: 6,
    y: 19,
    title: "Room 171",
    e: 168,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 172,
    x: 17,
    y: 23,
    title: "Room 172",
    s: 132,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 173,
    x: 17,
    y: 11,
    title: "Room 173",
    s: 202,
    w: 127,
    description: "There are exits to the south west ",
    items: ["Inky"]
  },
  {
    id: 174,
    x: 8,
    y: 21,
    title: "Room 174",
    n: 277,
    s: 124,
    w: 221,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 175,
    x: 12,
    y: 24,
    title: "Room 175",
    n: 200,
    e: 141,
    description: "There are exits to the north east ",
    items: ["Blinky"]
  },
  {
    id: 176,
    x: 18,
    y: 24,
    title: "Room 176",
    w: 139,
    description: "There are exits to the west ",
    items: ["Clyde"]
  },
  {
    id: 177,
    x: 7,
    y: 11,
    title: "Room 177",
    e: 156,
    w: 215,
    description: "There are exits to the east west ",
    items: ["Inky"]
  },
  {
    id: 178,
    x: 15,
    y: 25,
    title: "Room 178",
    w: 148,
    description: "There are exits to the west ",
    items: ["Pinky"]
  },
  {
    id: 179,
    x: 14,
    y: 10,
    title: "Room 179",
    n: 96,
    s: 181,
    e: 201,
    description: "There are exits to the north south east ",
    items: ["power pellet"]
  },
  {
    id: 180,
    x: 7,
    y: 12,
    title: "Room 180",
    e: 164,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 181,
    x: 14,
    y: 9,
    title: "Room 181",
    n: 179,
    description: "There are exits to the north ",
    items: ["Clyde"]
  },
  {
    id: 182,
    x: 17,
    y: 13,
    title: "Room 182",
    s: 170,
    e: 211,
    description: "There are exits to the south east ",
    items: ["power pellet"]
  },
  {
    id: 183,
    x: 10,
    y: 11,
    title: "Room 183",
    n: 145,
    description: "There are exits to the north ",
    items: ["Clyde"]
  },
  {
    id: 184,
    x: 19,
    y: 25,
    title: "Room 184",
    w: 154,
    description: "There are exits to the west ",
    items: ["Inky"]
  },
  {
    id: 185,
    x: 11,
    y: 23,
    title: "Room 185",
    n: 195,
    e: 155,
    w: 292,
    description: "There are exits to the north east west ",
    items: ["Inky"]
  },
  {
    id: 186,
    x: 20,
    y: 23,
    title: "Room 186",
    s: 98,
    e: 262,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 187,
    x: 5,
    y: 18,
    title: "Room 187",
    n: 303,
    e: 167,
    w: 301,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 188,
    x: 10,
    y: 10,
    title: "Room 188",
    s: 151,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 189,
    x: 20,
    y: 18,
    title: "Room 189",
    e: 275,
    w: 59,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 190,
    x: 7,
    y: 15,
    title: "Room 190",
    e: 129,
    w: 222,
    description: "There are exits to the east west ",
    items: ["power pellet"]
  },
  {
    id: 191,
    x: 9,
    y: 10,
    title: "Room 191",
    n: 149,
    s: 193,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 192,
    x: 18,
    y: 26,
    title: "Room 192",
    s: 154,
    e: 239,
    description: "There are exits to the south east ",
    items: ["power pellet"]
  },
  {
    id: 193,
    x: 9,
    y: 9,
    title: "Room 193",
    n: 191,
    s: 203,
    w: 241,
    description: "There are exits to the north south west ",
    items: ["Clyde"]
  },
  {
    id: 194,
    x: 6,
    y: 17,
    title: "Room 194",
    e: 128,
    w: 227,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 195,
    x: 11,
    y: 24,
    title: "Room 195",
    s: 185,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 196,
    x: 17,
    y: 27,
    title: "Room 196",
    n: 278,
    s: 152,
    e: 224,
    description: "There are exits to the north south east ",
    items: ["Blinky"]
  },
  {
    id: 197,
    x: 12,
    y: 26,
    title: "Room 197",
    e: 165,
    w: 199,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 198,
    x: 21,
    y: 19,
    title: "Room 198",
    n: 125,
    e: 270,
    description: "There are exits to the north east ",
    items: ["Blinky"]
  },
  {
    id: 199,
    x: 11,
    y: 26,
    title: "Room 199",
    n: 281,
    e: 197,
    w: 318,
    description: "There are exits to the north east west ",
    items: ["pellet"]
  },
  {
    id: 200,
    x: 12,
    y: 25,
    title: "Room 200",
    s: 175,
    e: 204,
    w: 328,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 201,
    x: 15,
    y: 10,
    title: "Room 201",
    s: 206,
    w: 179,
    description: "There are exits to the south west ",
    items: ["Blinky"]
  },
  {
    id: 202,
    x: 17,
    y: 10,
    title: "Room 202",
    n: 173,
    s: 267,
    e: 249,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 203,
    x: 9,
    y: 8,
    title: "Room 203",
    n: 193,
    s: 269,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 204,
    x: 13,
    y: 25,
    title: "Room 204",
    w: 200,
    description: "There are exits to the west ",
    items: ["power pellet"]
  },
  {
    id: 205,
    x: 6,
    y: 16,
    title: "Room 205",
    e: 162,
    w: 254,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 206,
    x: 15,
    y: 9,
    title: "Room 206",
    n: 201,
    s: 232,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 207,
    x: 7,
    y: 20,
    title: "Room 207",
    s: 168,
    w: 297,
    description: "There are exits to the south west ",
    items: ["Pinky"]
  },
  {
    id: 208,
    x: 9,
    y: 22,
    title: "Room 208",
    n: 307,
    e: 166,
    description: "There are exits to the north east ",
    items: ["Pinky"]
  },
  {
    id: 209,
    x: 8,
    y: 10,
    title: "Room 209",
    n: 156,
    w: 213,
    description: "There are exits to the north west ",
    items: ["power pellet"]
  },
  {
    id: 210,
    x: 9,
    y: 21,
    title: "Room 210",
    s: 112,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 211,
    x: 18,
    y: 13,
    title: "Room 211",
    s: 248,
    w: 182,
    description: "There are exits to the south west ",
    items: ["Blinky"]
  },
  {
    id: 212,
    x: 16,
    y: 10,
    title: "Room 212",
    n: 127,
    s: 229,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 213,
    x: 7,
    y: 10,
    title: "Room 213",
    s: 217,
    e: 209,
    w: 216,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 214,
    x: 21,
    y: 16,
    title: "Room 214",
    e: 246,
    w: 160,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 215,
    x: 6,
    y: 11,
    title: "Room 215",
    n: 243,
    e: 177,
    w: 220,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 216,
    x: 6,
    y: 10,
    title: "Room 216",
    e: 213,
    w: 236,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 217,
    x: 7,
    y: 9,
    title: "Room 217",
    n: 213,
    w: 271,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 218,
    x: 13,
    y: 9,
    title: "Room 218",
    n: 144,
    s: 252,
    w: 118,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 219,
    x: 19,
    y: 14,
    title: "Room 219",
    n: 119,
    s: 242,
    e: 305,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 220,
    x: 5,
    y: 11,
    title: "Room 220",
    n: 230,
    e: 215,
    w: 314,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 221,
    x: 7,
    y: 21,
    title: "Room 221",
    n: 250,
    e: 174,
    w: 342,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 222,
    x: 6,
    y: 15,
    title: "Room 222",
    e: 190,
    w: 274,
    description: "There are exits to the east west ",
    items: ["pellet"]
  },
  {
    id: 223,
    x: 12,
    y: 27,
    title: "Room 223",
    n: 483,
    e: 169,
    description: "There are exits to the north east ",
    items: ["pellet"]
  },
  {
    id: 224,
    x: 18,
    y: 27,
    title: "Room 224",
    n: 287,
    w: 196,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 225,
    x: 7,
    y: 14,
    title: "Room 225",
    e: 105,
    w: 226,
    description: "There are exits to the east west ",
    items: ["Pinky"]
  },
  {
    id: 226,
    x: 6,
    y: 14,
    title: "Room 226",
    s: 260,
    e: 225,
    description: "There are exits to the south east ",
    items: ["power pellet"]
  },
  {
    id: 227,
    x: 5,
    y: 17,
    title: "Room 227",
    e: 194,
    description: "There are exits to the east ",
    items: ["pellet"]
  },
  {
    id: 228,
    x: 15,
    y: 26,
    title: "Room 228",
    n: 253,
    w: 163,
    description: "There are exits to the north west ",
    items: ["Blinky"]
  },
  {
    id: 229,
    x: 16,
    y: 9,
    title: "Room 229",
    n: 212,
    s: 237,
    description: "There are exits to the north south ",
    items: ["pellet"]
  },
  {
    id: 230,
    x: 5,
    y: 12,
    title: "Room 230",
    s: 220,
    w: 344,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 231,
    x: 20,
    y: 24,
    title: "Room 231",
    n: 282,
    e: 294,
    w: 136,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 232,
    x: 15,
    y: 8,
    title: "Room 232",
    n: 206,
    s: 265,
    w: 244,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 233,
    x: 16,
    y: 26,
    title: "Room 233",
    n: 240,
    e: 152,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 234,
    x: 11,
    y: 8,
    title: "Room 234",
    n: 133,
    s: 280,
    e: 259,
    w: 247,
    description: "There are exits to the north south east west ",
    items: ["power pellet"]
  },
  {
    id: 235,
    x: 7,
    y: 13,
    title: "Room 235",
    e: 158,
    description: "There are exits to the east ",
    items: ["Blinky"]
  },
  {
    id: 236,
    x: 5,
    y: 10,
    title: "Room 236",
    s: 263,
    e: 216,
    w: 258,
    description: "There are exits to the south east west ",
    items: ["Blinky"]
  },
  {
    id: 237,
    x: 16,
    y: 8,
    title: "Room 237",
    n: 229,
    e: 370,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 238,
    x: 22,
    y: 20,
    title: "Room 238",
    n: 381,
    e: 293,
    w: 125,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 239,
    x: 19,
    y: 26,
    title: "Room 239",
    n: 255,
    e: 336,
    w: 192,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 240,
    x: 16,
    y: 27,
    title: "Room 240",
    n: 304,
    s: 233,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 241,
    x: 8,
    y: 9,
    title: "Room 241",
    s: 256,
    e: 193,
    description: "There are exits to the south east ",
    items: ["pellet"]
  },
  {
    id: 242,
    x: 19,
    y: 13,
    title: "Room 242",
    n: 219,
    s: 286,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 243,
    x: 6,
    y: 12,
    title: "Room 243",
    s: 215,
    description: "There are exits to the south ",
    items: ["pellet"]
  },
  {
    id: 244,
    x: 14,
    y: 8,
    title: "Room 244",
    s: 264,
    e: 232,
    description: "There are exits to the south east ",
    items: ["pellet"]
  },
  {
    id: 245,
    x: 21,
    y: 22,
    title: "Room 245",
    s: 142,
    e: 343,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 246,
    x: 22,
    y: 16,
    title: "Room 246",
    n: 325,
    e: 412,
    w: 214,
    description: "There are exits to the north east west ",
    items: ["Clyde"]
  },
  {
    id: 247,
    x: 10,
    y: 8,
    title: "Room 247",
    s: 369,
    e: 234,
    description: "There are exits to the south east ",
    items: ["Inky"]
  },
  {
    id: 248,
    x: 18,
    y: 12,
    title: "Room 248",
    n: 211,
    s: 272,
    description: "There are exits to the north south ",
    items: ["pellet"]
  },
  {
    id: 249,
    x: 18,
    y: 10,
    title: "Room 249",
    w: 202,
    description: "There are exits to the west ",
    items: ["Pinky"]
  },
  {
    id: 250,
    x: 7,
    y: 22,
    title: "Room 250",
    n: 295,
    s: 221,
    w: 289,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 251,
    x: 21,
    y: 17,
    title: "Room 251",
    w: 150,
    description: "There are exits to the west ",
    items: ["pellet"]
  },
  {
    id: 252,
    x: 13,
    y: 8,
    title: "Room 252",
    n: 218,
    s: 261,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 253,
    x: 15,
    y: 27,
    title: "Room 253",
    n: 285,
    s: 228,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 254,
    x: 5,
    y: 16,
    title: "Room 254",
    e: 205,
    w: 284,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 255,
    x: 19,
    y: 27,
    title: "Room 255",
    s: 239,
    description: "There are exits to the south ",
    items: ["pellet"]
  },
  {
    id: 256,
    x: 8,
    y: 8,
    title: "Room 256",
    n: 241,
    s: 279,
    w: 327,
    description: "There are exits to the north south west ",
    items: ["pellet"]
  },
  {
    id: 257,
    x: 14,
    y: 27,
    title: "Room 257",
    n: 388,
    s: 163,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 258,
    x: 4,
    y: 10,
    title: "Room 258",
    e: 236,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 259,
    x: 12,
    y: 8,
    title: "Room 259",
    s: 291,
    w: 234,
    description: "There are exits to the south west ",
    items: ["Blinky"]
  },
  {
    id: 260,
    x: 6,
    y: 13,
    title: "Room 260",
    n: 226,
    w: 266,
    description: "There are exits to the north west ",
    items: ["power pellet"]
  },
  {
    id: 261,
    x: 13,
    y: 7,
    title: "Room 261",
    n: 252,
    s: 345,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 262,
    x: 21,
    y: 23,
    title: "Room 262",
    e: 390,
    w: 186,
    description: "There are exits to the east west ",
    items: ["Inky"]
  },
  {
    id: 263,
    x: 5,
    y: 9,
    title: "Room 263",
    n: 236,
    s: 299,
    w: 372,
    description: "There are exits to the north south west ",
    items: ["Pinky"]
  },
  {
    id: 264,
    x: 14,
    y: 7,
    title: "Room 264",
    n: 244,
    s: 290,
    description: "There are exits to the north south ",
    items: ["Clyde"]
  },
  {
    id: 265,
    x: 15,
    y: 7,
    title: "Room 265",
    n: 232,
    s: 268,
    e: 273,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 266,
    x: 5,
    y: 13,
    title: "Room 266",
    n: 379,
    e: 260,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 267,
    x: 17,
    y: 9,
    title: "Room 267",
    n: 202,
    e: 302,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 268,
    x: 15,
    y: 6,
    title: "Room 268",
    n: 265,
    s: 276,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 269,
    x: 9,
    y: 7,
    title: "Room 269",
    n: 203,
    s: 315,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 270,
    x: 22,
    y: 19,
    title: "Room 270",
    e: 300,
    w: 198,
    description: "There are exits to the east west ",
    items: ["pellet"]
  },
  {
    id: 271,
    x: 6,
    y: 9,
    title: "Room 271",
    s: 310,
    e: 217,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 272,
    x: 18,
    y: 11,
    title: "Room 272",
    n: 248,
    description: "There are exits to the north ",
    items: ["pellet"]
  },
  {
    id: 273,
    x: 16,
    y: 7,
    title: "Room 273",
    s: 296,
    e: 298,
    w: 265,
    description: "There are exits to the south east west ",
    items: ["Pinky"]
  },
  {
    id: 274,
    x: 5,
    y: 15,
    title: "Room 274",
    e: 222,
    description: "There are exits to the east ",
    items: ["Pinky"]
  },
  {
    id: 275,
    x: 21,
    y: 18,
    title: "Room 275",
    e: 283,
    w: 189,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 276,
    x: 15,
    y: 5,
    title: "Room 276",
    n: 268,
    s: 459,
    w: 322,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 277,
    x: 8,
    y: 22,
    title: "Room 277",
    n: 331,
    s: 174,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 278,
    x: 17,
    y: 28,
    title: "Room 278",
    n: 338,
    s: 196,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 279,
    x: 8,
    y: 7,
    title: "Room 279",
    n: 256,
    s: 323,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 280,
    x: 11,
    y: 7,
    title: "Room 280",
    n: 234,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 281,
    x: 11,
    y: 27,
    title: "Room 281",
    n: 350,
    s: 199,
    w: 392,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 282,
    x: 20,
    y: 25,
    title: "Room 282",
    s: 231,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 283,
    x: 22,
    y: 18,
    title: "Room 283",
    e: 376,
    w: 275,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 284,
    x: 4,
    y: 16,
    title: "Room 284",
    n: 470,
    s: 349,
    e: 254,
    w: 368,
    description: "There are exits to the north south east west ",
    items: []
  },
  {
    id: 285,
    x: 15,
    y: 28,
    title: "Room 285",
    s: 253,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 286,
    x: 19,
    y: 12,
    title: "Room 286",
    n: 242,
    s: 309,
    e: 288,
    description: "There are exits to the north south east ",
    items: ["pellet"]
  },
  {
    id: 287,
    x: 18,
    y: 28,
    title: "Room 287",
    n: 313,
    s: 224,
    e: 353,
    description: "There are exits to the north south east ",
    items: ["Blinky"]
  },
  {
    id: 288,
    x: 20,
    y: 12,
    title: "Room 288",
    n: 326,
    e: 498,
    w: 286,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 289,
    x: 6,
    y: 22,
    title: "Room 289",
    n: 319,
    e: 250,
    w: 324,
    description: "There are exits to the north east west ",
    items: ["Inky"]
  },
  {
    id: 290,
    x: 14,
    y: 6,
    title: "Room 290",
    n: 264,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 291,
    x: 12,
    y: 7,
    title: "Room 291",
    n: 259,
    s: 306,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 292,
    x: 10,
    y: 23,
    title: "Room 292",
    n: 316,
    e: 185,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 293,
    x: 23,
    y: 20,
    title: "Room 293",
    w: 238,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 294,
    x: 21,
    y: 24,
    title: "Room 294",
    n: 363,
    e: 311,
    w: 231,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 295,
    x: 7,
    y: 23,
    title: "Room 295",
    n: 332,
    s: 250,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 296,
    x: 16,
    y: 6,
    title: "Room 296",
    n: 273,
    s: 382,
    e: 308,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 297,
    x: 6,
    y: 20,
    title: "Room 297",
    e: 207,
    description: "There are exits to the east ",
    items: ["Blinky"]
  },
  {
    id: 298,
    x: 17,
    y: 7,
    title: "Room 298",
    e: 360,
    w: 273,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 299,
    x: 5,
    y: 8,
    title: "Room 299",
    n: 263,
    s: 356,
    w: 312,
    description: "There are exits to the north south west ",
    items: ["Blinky"]
  },
  {
    id: 300,
    x: 23,
    y: 19,
    title: "Room 300",
    e: 320,
    w: 270,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 301,
    x: 4,
    y: 18,
    title: "Room 301",
    e: 187,
    description: "There are exits to the east ",
    items: ["Inky"]
  },
  {
    id: 302,
    x: 18,
    y: 9,
    title: "Room 302",
    e: 402,
    w: 267,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 303,
    x: 5,
    y: 19,
    title: "Room 303",
    n: 352,
    s: 187,
    w: 333,
    description: "There are exits to the north south west ",
    items: ["power pellet"]
  },
  {
    id: 304,
    x: 16,
    y: 28,
    title: "Room 304",
    n: 321,
    s: 240,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 305,
    x: 20,
    y: 14,
    title: "Room 305",
    e: 330,
    w: 219,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 306,
    x: 12,
    y: 6,
    title: "Room 306",
    n: 291,
    s: 415,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 307,
    x: 9,
    y: 23,
    title: "Room 307",
    s: 208,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 308,
    x: 17,
    y: 6,
    title: "Room 308",
    s: 317,
    e: 337,
    w: 296,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 309,
    x: 19,
    y: 11,
    title: "Room 309",
    n: 286,
    s: 371,
    e: 377,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 310,
    x: 6,
    y: 8,
    title: "Room 310",
    n: 271,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 311,
    x: 22,
    y: 24,
    title: "Room 311",
    n: 389,
    e: 499,
    w: 294,
    description: "There are exits to the north east west ",
    items: ["Pinky"]
  },
  {
    id: 312,
    x: 4,
    y: 8,
    title: "Room 312",
    s: 347,
    e: 299,
    w: 355,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 313,
    x: 18,
    y: 29,
    title: "Room 313",
    s: 287,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 314,
    x: 4,
    y: 11,
    title: "Room 314",
    e: 220,
    w: 339,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 315,
    x: 9,
    y: 6,
    title: "Room 315",
    n: 269,
    s: 406,
    e: 335,
    description: "There are exits to the north south east ",
    items: ["Pinky"]
  },
  {
    id: 316,
    x: 10,
    y: 24,
    title: "Room 316",
    s: 292,
    w: 341,
    description: "There are exits to the south west ",
    items: ["Clyde"]
  },
  {
    id: 317,
    x: 17,
    y: 5,
    title: "Room 317",
    n: 308,
    s: 416,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 318,
    x: 10,
    y: 26,
    title: "Room 318",
    s: 340,
    e: 199,
    w: 394,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 319,
    x: 6,
    y: 23,
    title: "Room 319",
    n: 441,
    s: 289,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 320,
    x: 24,
    y: 19,
    title: "Room 320",
    s: 471,
    w: 300,
    description: "There are exits to the south west ",
    items: ["Pinky"]
  },
  {
    id: 321,
    x: 16,
    y: 29,
    title: "Room 321",
    n: 334,
    s: 304,
    w: 354,
    description: "There are exits to the north south west ",
    items: ["Inky"]
  },
  {
    id: 322,
    x: 14,
    y: 5,
    title: "Room 322",
    s: 424,
    e: 276,
    description: "There are exits to the south east ",
    items: ["Clyde"]
  },
  {
    id: 323,
    x: 8,
    y: 6,
    title: "Room 323",
    n: 279,
    description: "There are exits to the north ",
    items: ["Clyde"]
  },
  {
    id: 324,
    x: 5,
    y: 22,
    title: "Room 324",
    n: 391,
    e: 289,
    w: 411,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 325,
    x: 22,
    y: 17,
    title: "Room 325",
    s: 246,
    description: "There are exits to the south ",
    items: ["pellet"]
  },
  {
    id: 326,
    x: 20,
    y: 13,
    title: "Room 326",
    s: 288,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 327,
    x: 7,
    y: 8,
    title: "Room 327",
    s: 362,
    e: 256,
    description: "There are exits to the south east ",
    items: ["pellet"]
  },
  {
    id: 328,
    x: 11,
    y: 25,
    title: "Room 328",
    e: 200,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 329,
    x: 21,
    y: 15,
    title: "Room 329",
    e: 407,
    w: 131,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 330,
    x: 21,
    y: 14,
    title: "Room 330",
    s: 348,
    e: 454,
    w: 305,
    description: "There are exits to the south east west ",
    items: ["pellet"]
  },
  {
    id: 331,
    x: 8,
    y: 23,
    title: "Room 331",
    n: 387,
    s: 277,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 332,
    x: 7,
    y: 24,
    title: "Room 332",
    n: 351,
    s: 295,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 333,
    x: 4,
    y: 19,
    title: "Room 333",
    n: 358,
    e: 303,
    w: 365,
    description: "There are exits to the north east west ",
    items: ["pellet"]
  },
  {
    id: 334,
    x: 16,
    y: 30,
    title: "Room 334",
    s: 321,
    e: 384,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 335,
    x: 10,
    y: 6,
    title: "Room 335",
    s: 346,
    e: 378,
    w: 315,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 336,
    x: 20,
    y: 26,
    title: "Room 336",
    n: 373,
    e: 421,
    w: 239,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 337,
    x: 18,
    y: 6,
    title: "Room 337",
    s: 383,
    w: 308,
    description: "There are exits to the south west ",
    items: ["Pinky"]
  },
  {
    id: 338,
    x: 17,
    y: 29,
    title: "Room 338",
    s: 278,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 339,
    x: 3,
    y: 11,
    title: "Room 339",
    s: 404,
    e: 314,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 340,
    x: 10,
    y: 25,
    title: "Room 340",
    n: 318,
    w: 374,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 341,
    x: 9,
    y: 24,
    title: "Room 341",
    e: 316,
    description: "There are exits to the east ",
    items: ["Clyde"]
  },
  {
    id: 342,
    x: 6,
    y: 21,
    title: "Room 342",
    e: 221,
    w: 357,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 343,
    x: 22,
    y: 22,
    title: "Room 343",
    w: 245,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 344,
    x: 4,
    y: 12,
    title: "Room 344",
    n: 359,
    e: 230,
    w: 367,
    description: "There are exits to the north east west ",
    items: ["Clyde"]
  },
  {
    id: 345,
    x: 13,
    y: 6,
    title: "Room 345",
    n: 261,
    s: 409,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 346,
    x: 10,
    y: 5,
    title: "Room 346",
    n: 335,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 347,
    x: 4,
    y: 7,
    title: "Room 347",
    n: 312,
    s: 375,
    w: 437,
    description: "There are exits to the north south west ",
    items: ["Pinky"]
  },
  {
    id: 348,
    x: 21,
    y: 13,
    title: "Room 348",
    n: 330,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 349,
    x: 4,
    y: 15,
    title: "Room 349",
    n: 284,
    w: 418,
    description: "There are exits to the north west ",
    items: ["pellet"]
  },
  {
    id: 350,
    x: 11,
    y: 28,
    title: "Room 350",
    n: 425,
    s: 281,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 351,
    x: 7,
    y: 25,
    title: "Room 351",
    n: 417,
    s: 332,
    w: 453,
    description: "There are exits to the north south west ",
    items: ["pellet"]
  },
  {
    id: 352,
    x: 5,
    y: 20,
    title: "Room 352",
    s: 303,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 353,
    x: 19,
    y: 28,
    title: "Room 353",
    n: 380,
    w: 287,
    description: "There are exits to the north west ",
    items: ["Clyde"]
  },
  {
    id: 354,
    x: 15,
    y: 29,
    title: "Room 354",
    n: 361,
    e: 321,
    w: 386,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 355,
    x: 3,
    y: 8,
    title: "Room 355",
    e: 312,
    w: 457,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 356,
    x: 5,
    y: 7,
    title: "Room 356",
    n: 299,
    s: 405,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 357,
    x: 5,
    y: 21,
    title: "Room 357",
    e: 342,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 358,
    x: 4,
    y: 20,
    title: "Room 358",
    n: 397,
    s: 333,
    w: 399,
    description: "There are exits to the north south west ",
    items: ["Inky"]
  },
  {
    id: 359,
    x: 4,
    y: 13,
    title: "Room 359",
    n: 458,
    s: 344,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 360,
    x: 18,
    y: 7,
    title: "Room 360",
    n: 364,
    w: 298,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 361,
    x: 15,
    y: 30,
    title: "Room 361",
    s: 354,
    w: 366,
    description: "There are exits to the south west ",
    items: ["Clyde"]
  },
  {
    id: 362,
    x: 7,
    y: 7,
    title: "Room 362",
    n: 327,
    s: 395,
    w: 469,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 363,
    x: 21,
    y: 25,
    title: "Room 363",
    s: 294,
    description: "There are exits to the south ",
    items: ["Inky"]
  },
  {
    id: 364,
    x: 18,
    y: 8,
    title: "Room 364",
    s: 360,
    e: 401,
    description: "There are exits to the south east ",
    items: ["Clyde"]
  },
  {
    id: 365,
    x: 3,
    y: 19,
    title: "Room 365",
    s: 447,
    e: 333,
    w: 414,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 366,
    x: 14,
    y: 30,
    title: "Room 366",
    e: 361,
    w: 497,
    description: "There are exits to the east west ",
    items: ["Clyde"]
  },
  {
    id: 367,
    x: 3,
    y: 12,
    title: "Room 367",
    n: 462,
    e: 344,
    description: "There are exits to the north east ",
    items: ["Blinky"]
  },
  {
    id: 368,
    x: 3,
    y: 16,
    title: "Room 368",
    n: 436,
    e: 284,
    w: 465,
    description: "There are exits to the north east west ",
    items: []
  },
  {
    id: 369,
    x: 10,
    y: 7,
    title: "Room 369",
    n: 247,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 370,
    x: 17,
    y: 8,
    title: "Room 370",
    w: 237,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 371,
    x: 19,
    y: 10,
    title: "Room 371",
    n: 309,
    e: 430,
    description: "There are exits to the north east ",
    items: ["Blinky"]
  },
  {
    id: 372,
    x: 4,
    y: 9,
    title: "Room 372",
    e: 263,
    w: 433,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 373,
    x: 20,
    y: 27,
    title: "Room 373",
    s: 336,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 374,
    x: 9,
    y: 25,
    title: "Room 374",
    e: 340,
    description: "There are exits to the east ",
    items: ["Clyde"]
  },
  {
    id: 375,
    x: 4,
    y: 6,
    title: "Room 375",
    n: 347,
    s: 413,
    w: 393,
    description: "There are exits to the north south west ",
    items: []
  },
  {
    id: 376,
    x: 23,
    y: 18,
    title: "Room 376",
    s: 468,
    w: 283,
    description: "There are exits to the south west ",
    items: ["pellet"]
  },
  {
    id: 377,
    x: 20,
    y: 11,
    title: "Room 377",
    e: 456,
    w: 309,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 378,
    x: 11,
    y: 6,
    title: "Room 378",
    s: 466,
    w: 335,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 379,
    x: 5,
    y: 14,
    title: "Room 379",
    s: 266,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 380,
    x: 19,
    y: 29,
    title: "Room 380",
    n: 476,
    s: 353,
    e: 445,
    description: "There are exits to the north south east ",
    items: ["pellet"]
  },
  {
    id: 381,
    x: 22,
    y: 21,
    title: "Room 381",
    s: 238,
    e: 431,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 382,
    x: 16,
    y: 5,
    title: "Room 382",
    n: 296,
    s: 455,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 383,
    x: 18,
    y: 5,
    title: "Room 383",
    n: 337,
    s: 460,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 384,
    x: 17,
    y: 30,
    title: "Room 384",
    e: 435,
    w: 334,
    description: "There are exits to the east west ",
    items: ["power pellet"]
  },
  {
    id: 385,
    x: 13,
    y: 28,
    title: "Room 385",
    s: 169,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 386,
    x: 14,
    y: 29,
    title: "Room 386",
    s: 388,
    e: 354,
    description: "There are exits to the south east ",
    items: []
  },
  {
    id: 387,
    x: 8,
    y: 24,
    title: "Room 387",
    n: 444,
    s: 331,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 388,
    x: 14,
    y: 28,
    title: "Room 388",
    n: 386,
    s: 257,
    description: "There are exits to the north south ",
    items: ["Pinky"]
  },
  {
    id: 389,
    x: 22,
    y: 25,
    title: "Room 389",
    s: 311,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 390,
    x: 22,
    y: 23,
    title: "Room 390",
    e: 398,
    w: 262,
    description: "There are exits to the east west ",
    items: ["Blinky"]
  },
  {
    id: 391,
    x: 5,
    y: 23,
    title: "Room 391",
    n: 489,
    s: 324,
    w: 396,
    description: "There are exits to the north south west ",
    items: ["Inky"]
  },
  {
    id: 392,
    x: 10,
    y: 27,
    title: "Room 392",
    n: 408,
    e: 281,
    description: "There are exits to the north east ",
    items: ["Inky"]
  },
  {
    id: 393,
    x: 3,
    y: 6,
    title: "Room 393",
    e: 375,
    description: "There are exits to the east ",
    items: ["Inky"]
  },
  {
    id: 394,
    x: 9,
    y: 26,
    title: "Room 394",
    n: 426,
    e: 318,
    w: 422,
    description: "There are exits to the north east west ",
    items: ["power pellet"]
  },
  {
    id: 395,
    x: 7,
    y: 6,
    title: "Room 395",
    n: 362,
    w: 423,
    description: "There are exits to the north west ",
    items: ["Inky"]
  },
  {
    id: 396,
    x: 4,
    y: 23,
    title: "Room 396",
    e: 391,
    description: "There are exits to the east ",
    items: ["Pinky"]
  },
  {
    id: 397,
    x: 4,
    y: 21,
    title: "Room 397",
    s: 358,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 398,
    x: 23,
    y: 23,
    title: "Room 398",
    s: 487,
    w: 390,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 399,
    x: 3,
    y: 20,
    title: "Room 399",
    e: 358,
    w: 400,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 400,
    x: 2,
    y: 20,
    title: "Room 400",
    e: 399,
    w: 492,
    description: "There are exits to the east west ",
    items: ["Pinky"]
  },
  {
    id: 401,
    x: 19,
    y: 8,
    title: "Room 401",
    s: 420,
    e: 427,
    w: 364,
    description: "There are exits to the south east west ",
    items: ["pellet"]
  },
  {
    id: 402,
    x: 19,
    y: 9,
    title: "Room 402",
    e: 403,
    w: 302,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 403,
    x: 20,
    y: 9,
    title: "Room 403",
    e: 439,
    w: 402,
    description: "There are exits to the east west ",
    items: ["Clyde"]
  },
  {
    id: 404,
    x: 3,
    y: 10,
    title: "Room 404",
    n: 339,
    w: 482,
    description: "There are exits to the north west ",
    items: ["Inky"]
  },
  {
    id: 405,
    x: 5,
    y: 6,
    title: "Room 405",
    n: 356,
    s: 432,
    description: "There are exits to the north south ",
    items: ["Blinky"]
  },
  {
    id: 406,
    x: 9,
    y: 5,
    title: "Room 406",
    n: 315,
    w: 410,
    description: "There are exits to the north west ",
    items: []
  },
  {
    id: 407,
    x: 22,
    y: 15,
    title: "Room 407",
    w: 329,
    description: "There are exits to the west ",
    items: ["Pinky"]
  },
  {
    id: 408,
    x: 10,
    y: 28,
    title: "Room 408",
    n: 443,
    s: 392,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 409,
    x: 13,
    y: 5,
    title: "Room 409",
    n: 345,
    s: 488,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 410,
    x: 8,
    y: 5,
    title: "Room 410",
    e: 406,
    description: "There are exits to the east ",
    items: ["Blinky"]
  },
  {
    id: 411,
    x: 4,
    y: 22,
    title: "Room 411",
    e: 324,
    w: 428,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 412,
    x: 23,
    y: 16,
    title: "Room 412",
    w: 246,
    description: "There are exits to the west ",
    items: ["Blinky"]
  },
  {
    id: 413,
    x: 4,
    y: 5,
    title: "Room 413",
    n: 375,
    s: 419,
    w: 478,
    description: "There are exits to the north south west ",
    items: ["pellet"]
  },
  {
    id: 414,
    x: 2,
    y: 19,
    title: "Room 414",
    e: 365,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 415,
    x: 12,
    y: 5,
    title: "Room 415",
    n: 306,
    description: "There are exits to the north ",
    items: ["power pellet"]
  },
  {
    id: 416,
    x: 17,
    y: 4,
    title: "Room 416",
    n: 317,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 417,
    x: 7,
    y: 26,
    title: "Room 417",
    n: 442,
    s: 351,
    description: "There are exits to the north south ",
    items: ["Clyde"]
  },
  {
    id: 418,
    x: 3,
    y: 15,
    title: "Room 418",
    s: 463,
    e: 349,
    w: 479,
    description: "There are exits to the south east west ",
    items: ["Blinky"]
  },
  {
    id: 419,
    x: 4,
    y: 4,
    title: "Room 419",
    n: 413,
    description: "There are exits to the north ",
    items: ["Blinky"]
  },
  {
    id: 420,
    x: 19,
    y: 7,
    title: "Room 420",
    n: 401,
    s: 464,
    description: "There are exits to the north south ",
    items: ["Clyde"]
  },
  {
    id: 421,
    x: 21,
    y: 26,
    title: "Room 421",
    w: 336,
    description: "There are exits to the west ",
    items: ["Blinky"]
  },
  {
    id: 422,
    x: 8,
    y: 26,
    title: "Room 422",
    n: 461,
    e: 394,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 423,
    x: 6,
    y: 6,
    title: "Room 423",
    e: 395,
    description: "There are exits to the east ",
    items: ["Clyde"]
  },
  {
    id: 424,
    x: 14,
    y: 4,
    title: "Room 424",
    n: 322,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 425,
    x: 11,
    y: 29,
    title: "Room 425",
    n: 434,
    s: 350,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 426,
    x: 9,
    y: 27,
    title: "Room 426",
    s: 394,
    description: "There are exits to the south ",
    items: ["Clyde"]
  },
  {
    id: 427,
    x: 20,
    y: 8,
    title: "Room 427",
    s: 438,
    e: 474,
    w: 401,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 428,
    x: 3,
    y: 22,
    title: "Room 428",
    s: 429,
    e: 411,
    w: 452,
    description: "There are exits to the south east west ",
    items: ["power pellet"]
  },
  {
    id: 429,
    x: 3,
    y: 21,
    title: "Room 429",
    n: 428,
    w: 451,
    description: "There are exits to the north west ",
    items: ["Clyde"]
  },
  {
    id: 430,
    x: 20,
    y: 10,
    title: "Room 430",
    e: 440,
    w: 371,
    description: "There are exits to the east west ",
    items: ["Pinky"]
  },
  {
    id: 431,
    x: 23,
    y: 21,
    title: "Room 431",
    w: 381,
    description: "There are exits to the west ",
    items: ["Inky"]
  },
  {
    id: 432,
    x: 5,
    y: 5,
    title: "Room 432",
    n: 405,
    s: 449,
    e: 473,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 433,
    x: 3,
    y: 9,
    title: "Room 433",
    e: 372,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 434,
    x: 11,
    y: 30,
    title: "Room 434",
    s: 425,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 435,
    x: 18,
    y: 30,
    title: "Room 435",
    w: 384,
    description: "There are exits to the west ",
    items: ["power pellet"]
  },
  {
    id: 436,
    x: 3,
    y: 17,
    title: "Room 436",
    s: 368,
    description: "There are exits to the south ",
    items: ["power pellet"]
  },
  {
    id: 437,
    x: 3,
    y: 7,
    title: "Room 437",
    e: 347,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 438,
    x: 20,
    y: 7,
    title: "Room 438",
    n: 427,
    s: 448,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 439,
    x: 21,
    y: 9,
    title: "Room 439",
    w: 403,
    description: "There are exits to the west ",
    items: ["Clyde"]
  },
  {
    id: 440,
    x: 21,
    y: 10,
    title: "Room 440",
    w: 430,
    description: "There are exits to the west ",
    items: ["Pinky"]
  },
  {
    id: 441,
    x: 6,
    y: 24,
    title: "Room 441",
    s: 319,
    description: "There are exits to the south ",
    items: ["pellet"]
  },
  {
    id: 442,
    x: 7,
    y: 27,
    title: "Room 442",
    s: 417,
    description: "There are exits to the south ",
    items: ["Blinky"]
  },
  {
    id: 443,
    x: 10,
    y: 29,
    title: "Room 443",
    s: 408,
    w: 477,
    description: "There are exits to the south west ",
    items: ["pellet"]
  },
  {
    id: 444,
    x: 8,
    y: 25,
    title: "Room 444",
    s: 387,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 445,
    x: 20,
    y: 29,
    title: "Room 445",
    s: 480,
    e: 446,
    w: 380,
    description: "There are exits to the south east west ",
    items: []
  },
  {
    id: 446,
    x: 21,
    y: 29,
    title: "Room 446",
    w: 445,
    description: "There are exits to the west ",
    items: ["Inky"]
  },
  {
    id: 447,
    x: 3,
    y: 18,
    title: "Room 447",
    n: 365,
    description: "There are exits to the north ",
    items: ["power pellet"]
  },
  {
    id: 448,
    x: 20,
    y: 6,
    title: "Room 448",
    n: 438,
    s: 475,
    e: 490,
    description: "There are exits to the north south east ",
    items: ["power pellet"]
  },
  {
    id: 449,
    x: 5,
    y: 4,
    title: "Room 449",
    n: 432,
    e: 450,
    description: "There are exits to the north east ",
    items: []
  },
  {
    id: 450,
    x: 6,
    y: 4,
    title: "Room 450",
    w: 449,
    description: "There are exits to the west ",
    items: ["Inky"]
  },
  {
    id: 451,
    x: 2,
    y: 21,
    title: "Room 451",
    e: 429,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 452,
    x: 2,
    y: 22,
    title: "Room 452",
    e: 428,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 453,
    x: 6,
    y: 25,
    title: "Room 453",
    e: 351,
    description: "There are exits to the east ",
    items: ["power pellet"]
  },
  {
    id: 454,
    x: 22,
    y: 14,
    title: "Room 454",
    w: 330,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 455,
    x: 16,
    y: 4,
    title: "Room 455",
    n: 382,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 456,
    x: 21,
    y: 11,
    title: "Room 456",
    w: 377,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 457,
    x: 2,
    y: 8,
    title: "Room 457",
    e: 355,
    w: 494,
    description: "There are exits to the east west ",
    items: ["Inky"]
  },
  {
    id: 458,
    x: 4,
    y: 14,
    title: "Room 458",
    s: 359,
    w: 463,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 459,
    x: 15,
    y: 4,
    title: "Room 459",
    n: 276,
    s: 467,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 460,
    x: 18,
    y: 4,
    title: "Room 460",
    n: 383,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 461,
    x: 8,
    y: 27,
    title: "Room 461",
    s: 422,
    description: "There are exits to the south ",
    items: ["Inky"]
  },
  {
    id: 462,
    x: 3,
    y: 13,
    title: "Room 462",
    s: 367,
    w: 486,
    description: "There are exits to the south west ",
    items: []
  },
  {
    id: 463,
    x: 3,
    y: 14,
    title: "Room 463",
    n: 418,
    e: 458,
    description: "There are exits to the north east ",
    items: ["power pellet"]
  },
  {
    id: 464,
    x: 19,
    y: 6,
    title: "Room 464",
    n: 420,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 465,
    x: 2,
    y: 16,
    title: "Room 465",
    e: 368,
    description: "There are exits to the east ",
    items: ["power pellet"]
  },
  {
    id: 466,
    x: 11,
    y: 5,
    title: "Room 466",
    n: 378,
    s: 472,
    description: "There are exits to the north south ",
    items: ["power pellet"]
  },
  {
    id: 467,
    x: 15,
    y: 3,
    title: "Room 467",
    n: 459,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 468,
    x: 23,
    y: 17,
    title: "Room 468",
    n: 376,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 469,
    x: 6,
    y: 7,
    title: "Room 469",
    e: 362,
    description: "There are exits to the east ",
    items: ["Inky"]
  },
  {
    id: 470,
    x: 4,
    y: 17,
    title: "Room 470",
    s: 284,
    description: "There are exits to the south ",
    items: ["Pinky"]
  },
  {
    id: 471,
    x: 24,
    y: 18,
    title: "Room 471",
    n: 320,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 472,
    x: 11,
    y: 4,
    title: "Room 472",
    n: 466,
    s: 481,
    e: 495,
    description: "There are exits to the north south east ",
    items: []
  },
  {
    id: 473,
    x: 6,
    y: 5,
    title: "Room 473",
    w: 432,
    description: "There are exits to the west ",
    items: ["Pinky"]
  },
  {
    id: 474,
    x: 21,
    y: 8,
    title: "Room 474",
    w: 427,
    description: "There are exits to the west ",
    items: ["pellet"]
  },
  {
    id: 475,
    x: 20,
    y: 5,
    title: "Room 475",
    n: 448,
    s: 496,
    description: "There are exits to the north south ",
    items: []
  },
  {
    id: 476,
    x: 19,
    y: 30,
    title: "Room 476",
    s: 380,
    description: "There are exits to the south ",
    items: ["Pinky"]
  },
  {
    id: 477,
    x: 9,
    y: 29,
    title: "Room 477",
    e: 443,
    description: "There are exits to the east ",
    items: ["Clyde"]
  },
  {
    id: 478,
    x: 3,
    y: 5,
    title: "Room 478",
    e: 413,
    w: 493,
    description: "There are exits to the east west ",
    items: []
  },
  {
    id: 479,
    x: 2,
    y: 15,
    title: "Room 479",
    e: 418,
    description: "There are exits to the east ",
    items: ["pellet"]
  },
  {
    id: 480,
    x: 20,
    y: 28,
    title: "Room 480",
    n: 445,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 481,
    x: 11,
    y: 3,
    title: "Room 481",
    n: 472,
    w: 485,
    description: "There are exits to the north west ",
    items: ["pellet"]
  },
  {
    id: 482,
    x: 2,
    y: 10,
    title: "Room 482",
    s: 484,
    e: 404,
    description: "There are exits to the south east ",
    items: ["Clyde"]
  },
  {
    id: 483,
    x: 12,
    y: 28,
    title: "Room 483",
    s: 223,
    description: "There are exits to the south ",
    items: []
  },
  {
    id: 484,
    x: 2,
    y: 9,
    title: "Room 484",
    n: 482,
    description: "There are exits to the north ",
    items: ["Pinky"]
  },
  {
    id: 485,
    x: 10,
    y: 3,
    title: "Room 485",
    e: 481,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 486,
    x: 2,
    y: 13,
    title: "Room 486",
    e: 462,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 487,
    x: 23,
    y: 22,
    title: "Room 487",
    n: 398,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 488,
    x: 13,
    y: 4,
    title: "Room 488",
    n: 409,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 489,
    x: 5,
    y: 24,
    title: "Room 489",
    n: 491,
    s: 391,
    description: "There are exits to the north south ",
    items: ["Inky"]
  },
  {
    id: 490,
    x: 21,
    y: 6,
    title: "Room 490",
    w: 448,
    description: "There are exits to the west ",
    items: ["pellet"]
  },
  {
    id: 491,
    x: 5,
    y: 25,
    title: "Room 491",
    s: 489,
    description: "There are exits to the south ",
    items: ["Pinky"]
  },
  {
    id: 492,
    x: 1,
    y: 20,
    title: "Room 492",
    e: 400,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 493,
    x: 2,
    y: 5,
    title: "Room 493",
    e: 478,
    description: "There are exits to the east ",
    items: []
  },
  {
    id: 494,
    x: 1,
    y: 8,
    title: "Room 494",
    e: 457,
    description: "There are exits to the east ",
    items: ["Inky"]
  },
  {
    id: 495,
    x: 12,
    y: 4,
    title: "Room 495",
    w: 472,
    description: "There are exits to the west ",
    items: []
  },
  {
    id: 496,
    x: 20,
    y: 4,
    title: "Room 496",
    n: 475,
    description: "There are exits to the north ",
    items: []
  },
  {
    id: 497,
    x: 13,
    y: 30,
    title: "Room 497",
    e: 366,
    description: "There are exits to the east ",
    items: ["power pellet"]
  },
  {
    id: 498,
    x: 21,
    y: 12,
    title: "Room 498",
    w: 288,
    description: "There are exits to the west ",
    items: ["Blinky"]
  },
  {
    id: 499,
    x: 23,
    y: 24,
    title: "Room 499",
    w: 311,
    description: "There are exits to the west ",
    items: ["Clyde"]
  }
];

newFormat = {};
room_data.forEach(item => {
  newFormat[item.id] = [
    {
      x: item.x,
      y: item.y
    },
    {}
  ];
  if ("n" in item) {
    newFormat[item.id][1]["n"] = item.n;
  }
  if ("s" in item) {
    newFormat[item.id][1]["s"] = item.s;
  }
  if ("e" in item) {
    newFormat[item.id][1]["e"] = item.e;
  }
  if ("w" in item) {
    newFormat[item.id][1]["w"] = item.w;
  }
});

console.log(newFormat);
