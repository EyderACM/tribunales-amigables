import React, { useLayoutEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import axios from "axios";
import {
  Box,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const admin = () => {
  const router = useRouter();
  const [{ token, isAdmin }] = useUserAuth();
  const [userList, setUserList] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [answers, setAnswers] = useState();
  const [downloadableAnswers, setDownloadableAnswers] = useState();

  useLayoutEffect(() => {
    if (!token || !isAdmin) router.push("/");

    const fetchAnswers = async () => {
      const { data } = await axios.post(
        "/game/users/answers",
        { game_name: "Secretos buenos y secretos malos" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserList(
        data.reduce((prev, curr) => ({ ...prev, [curr.user.email]: curr }), {})
      );
      const parsedAnswers = data.map(({ user, games }) => ({
        nombre: `${user.first_name} ${user.last_name}`,
        municipio: user.municipality,
        email: user.email,
        respuestas: games.reduce(
          (acc, current) => ({
            ...acc,
            ...(acc[current.question]
              ? {
                  [current.question]: [
                    ...acc[current.question],
                    current.answer,
                  ],
                }
              : { [current.question]: [current.answer] }),
          }),
          {}
        ),
      }));

      const downloadableAnswers = parsedAnswers.map(
        ({ respuestas, ...rest }) => ({
          ...rest,
          ...(() => {
            return Object.entries(respuestas).reduce(
              (prev, curr) => ({
                ...prev,
                [curr[0]]: (curr[1] as any).reduce(
                  (prev, curr, index) =>
                    `${prev} ${index > 0 ? "," : ""} Respuesta ${
                      index + 1
                    }:  ${curr}`,
                  ""
                ),
              }),
              {}
            );
          })(),
        })
      );
      setDownloadableAnswers(downloadableAnswers);
      setAnswers(parsedAnswers);
    };
    fetchAnswers();
  }, [token, isAdmin]);

  return (
    <>
      <Modal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedUser &&
              (({ user }) => `${user.first_name} ${user.last_name}`)(
                selectedUser
              )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer as={Stack} spacing={2}>
              {selectedUser &&
                selectedUser.games.map(({ play_date, answers }, i) => (
                  <Flex flexDir="column">
                    <Text>Juego numero: {i + 1}</Text>
                    <Text>
                      Fecha de juego: {dayjs(play_date).format("DD/MM/YYYY")}
                    </Text>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Pregunta</Th>
                          <Th>Respuesta</Th>
                          <Th>Es correcta?</Th>
                          <Th>Tiempo en responder</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {answers.map(({ question, is_correct, time }) => (
                          <Tr>
                            <Td>{question.description}</Td>
                            <Td>{question.answer}</Td>
                            <Td>{is_correct ? "correcto" : "incorrecto"}</Td>
                            <Td>{time}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Flex>
                ))}
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setSelectedUser(null)}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box bgColor="#f4fcfc" h="100vh">
        <Flex
          alignItems="center"
          px="20px"
          w="100%"
          mb="20px"
          bgColor="#6844bc"
          justifyContent="space-between"
          h="80px"
        >
          <Text mt="8px" color="white" fontSize="40px">
            Resultados
          </Text>
          {/* <CsvDownload
            style={{
              color: "purple",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              height: "45px",
              padding: "0px 10px",
              backgroundColor: "white",
            }}
            data={downloadableAnswers}
          >
            Descargar respuestas
          </CsvDownload> */}
        </Flex>
        <AnimatePresence exitBeforeEnter>
          {!answers ? (
            <Flex
              as={motion.div}
              key="circle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              alignItems="center"
              justifyContent="center"
              w="100%"
              h="98vh"
            >
              <Spinner thickness="30px" color="purple.500" size="xl" />
            </Flex>
          ) : (
            <Flex
              as={motion.div}
              flexDir="column"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              w="100%"
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                w="100%"
                px="100px"
              >
                <TableContainer
                  borderRadius="10px"
                  border="3px solid #6844bc"
                  minH="800px"
                  w="100%"
                >
                  <Table variant="striped" colorScheme="purple">
                    <Thead>
                      <Tr>
                        <Th fontFamily="Arial" color="purple" fontSize="14px">
                          Nombre de infante
                        </Th>
                        <Th fontFamily="Arial" fontSize="14px" color="purple">
                          Municipio
                        </Th>
                        <Th fontFamily="Arial" fontSize="14px" color="purple">
                          Email
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {(answers as any).map(({ nombre, municipio, email }) => (
                        <Tr
                          onClick={() => {
                            setSelectedUser((userList as any)[email]);
                          }}
                          cursor="pointer"
                        >
                          <Td color="black">{nombre}</Td>
                          <Td color="black">{municipio}</Td>
                          <Td color="black">{email}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Flex>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default admin;
