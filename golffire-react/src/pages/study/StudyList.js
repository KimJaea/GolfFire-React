import React, { useState } from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======

>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
import {
  ChakraProvider,
  Flex,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";

<<<<<<< HEAD
import {
  SmallAddIcon,
} from "@chakra-ui/icons";
import "./study.css"
=======
import "./studylist.css"
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4

function Learning() {
  const [coachingActive, setCoachingActive] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleCoachingClick = () => {
    setCoachingActive(true);
  };

  const handleRunningClick = () => {
    setCoachingActive(false);
  };

  return (
    <ChakraProvider>
<<<<<<< HEAD
      <div id="Study">
        <h1>스터디</h1>
=======
      <div id="Learning">
        <h1>코칭 / 러닝</h1>
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
        <h2>
          희망하는 코칭/러닝 방에 입장하세요.<br />
          새로운 방을 만들어도 됩니다.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            w="50px"
            h="30px"
<<<<<<< HEAD
            bgColor={coachingActive ? '#72CE27' : 'white'}
=======
            bgColor={coachingActive ? 'yellow' : 'white'}
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
            borderRadius="20px"
            onClick={handleCoachingClick}
          >
            코칭
          </Button>
          <Button
            w="50px"
            h="30px"
            bgColor={!coachingActive ? 'yellow' : 'white'}
            borderRadius="20px"
            onClick={handleRunningClick}
          >
            러닝
          </Button>
        </div>
<<<<<<< HEAD
        <div id="Search">
=======
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
          <Input
            w="300px"
            h="25px"
            bgColor="white"
            border="1px solid #ccc"
            fontSize="12px"
            textalign="left"
            placeholder="검색어를 입력하세요(방 제목, 개설자)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
<<<<<<< HEAD
        <div className="Study-List">
          <Flex flexWrap="wrap" justifyContent="flex-start">
            <Link to="/createroom">
              <Box
                w="400px"
                h="240px"
                bgColor="#D9D9D9"
                borderRadius="48px"
                my="10px"
                mx="25px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SmallAddIcon w={8} h={8} />
              </Box>
            </Link>
            {/* 새로운 박스 1 */}
            <Link to="/coachingroom">
              <Box
                w="400px"
                h="240px"
                bgColor="#D9D9D9"
                borderRadius="48px"
                my="10px"
                mx="25px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
              </Box>
            </Link>

            {/* 새로운 박스 2 */}
            <Link to="/coachingroom">
              <Box
                w="400px"
                h="240px"
                bgColor="#D9D9D9"
                borderRadius="48px"
                my="10px"
                mx="25px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
              </Box>
            </Link>

            {/* 새로운 박스 3 */}
            <Link to="/coachingroom">
              <Box
                w="400px"
                h="240px"
                bgColor="#D9D9D9"
                borderRadius="48px"
                my="10px"
                mx="25px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
              </Box>
            </Link>
          </Flex>
=======
        <div id="Learning-List">

>>>>>>> ac0cb2b0be79d226cd64bbb034465202d4c26da4
        </div>
      </div>
    </ChakraProvider>
  );
}


export default Learning;