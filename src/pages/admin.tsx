import React, { useLayoutEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
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
} from "@chakra-ui/react";
import { AnimatePresence, m, motion } from "framer-motion";

const admin = () => {
  const router = useRouter();
  const [{ token, isAdmin }] = useUserAuth();
  const [answers, setAnswers] = useState();
  const [downloadableAnswers, setDownloadableAnswers] = useState();

  useLayoutEffect(() => {
    if (!token || !isAdmin) router.push("/");

    const fetchAnswers = async () => {
      const { data } = await axios.get("/users/answers/secrets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      const parsedAnswers = data.map(({ user, questions }) => ({
        nombre: user.name,
        municipio: user.municipality,
        email: user.email,
        respuestas: questions.reduce(
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
        <CsvDownload
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
        </CsvDownload>
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
                      <Tr>
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
  );
};

export default admin;
