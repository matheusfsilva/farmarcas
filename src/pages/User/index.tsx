/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { ValidationError } from 'yup';
import { useParams } from 'react-router-dom';
import UsersSave from './usersSave';
import Fields from './fields';
import ValidDialog from './validDialog';
import LoadingFull from '../../components/LoadingFull';
import { postUser, getUser, putUser } from '../../services/apis/usersAPI';
import { UserModel } from '../../providers/models/UserModel';

export default function UserPage() {
    const [user, setUser] = useState<UserModel>(new UserModel)
    const [errors, setErrors] = useState({})
    const [openCheck, setOpenCheck] = useState(false)
    const [load, setLoad] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        async function get() {
            setLoad(true)
            if (id) {
                if (id !== 'new') {
                    const response = await getUser(parseInt(id, 10))
                    if (response.status === 200) {
                        setUser(response.data)
                    }
                }
            }
            setLoad(false)
        } get()
    }, [])

    function cpfIsInvalid(cpf: string | undefined) {
        if (cpf) {
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf === '') return false;
            // Elimina CPFs invalidos conhecidos	
            if (cpf.length !== 11 ||
                cpf === "00000000000" ||
                cpf === "11111111111" ||
                cpf === "22222222222" ||
                cpf === "33333333333" ||
                cpf === "44444444444" ||
                cpf === "55555555555" ||
                cpf === "66666666666" ||
                cpf === "77777777777" ||
                cpf === "88888888888" ||
                cpf === "99999999999")
                return false;
            // Valida 1o digito	
            let add = 0;
            for (let i = 0; i < 9; i++) {
                add += parseInt(cpf.charAt(i), 10) * (10 - i);
            }
            let rev = 11 - (add % 11);
            if (rev === 10 || rev === 11) {
                rev = 0;
            }
            if (rev !== parseInt(cpf.charAt(9), 10)) {
                return false;
            }
            // Valida 2o digito	
            add = 0;
            for (let i = 0; i < 10; i++) {
                add += parseInt(cpf.charAt(i), 10) * (11 - i);
            }
            rev = 11 - (add % 11);
            if (rev === 10 || rev === 11) {
                rev = 0;
            }
            if (rev !== parseInt(cpf.charAt(10), 10)) {
                return false;
            }
            return true;
        }
        return false;
    }

    async function validation() {
        interface Errors {
            [key: string]: string;
        }
        setErrors({})
        const userSchema = yup.object().shape({
            name: yup
                .string()
                .required('Nome requerido'),
            email: yup
                .string()
                .email('E-mail invalido')
                .required('E-mail requerido'),
            cpf: yup
                .string()
                .required('Cpf requerido').test(
                    'test-invalid-cpf',
                    'cpf inválido',
                    (cpf) => cpfIsInvalid(cpf)),
            profile: yup
                .string()
                .required('Perfil de acesso requerido'),
            rede: yup.array().min(1, 'Selecione ao menos 1 rede').required('Rede requerida'),
            loja: yup.array().min(1, 'Selecione ao menos 1 loja').required('Rede requerida')
        })
        try {
            await userSchema
                .validate(user, {
                    abortEarly: false,
                })
            return true
        } catch (error: any) {
            const validationErrors: Errors = {};
            error.inner.forEach((err: ValidationError) => {
                const path: string = err.path ? err.path?.toString() : 'null';
                validationErrors[path] = err.message;
            });
            setErrors(validationErrors)
            return false
        }
    }

    async function postUserCall() {
        const response = await postUser(user)
        if (response.status === 201 || response.status === 200) {
            setOpenCheck(true)
            // setTimeout(() => {
            //     setOpenCheck(false)
            // }, 2000)
        }
    }

    async function putUserCall() {
        const response = await putUser(user)
        if (response.status === 201 || response.status === 200) {
            setOpenCheck(true)
        }
    }

    async function submit() {
        setLoad(true)
        const valid = await validation()
        if (valid) {
            if (user.id) {
                await putUserCall()
            } else {
                await postUserCall()
            }
        }
        setLoad(false)
    }

    return (
        <>
            <LoadingFull open={load} />
            <ValidDialog open={openCheck} close={() => setOpenCheck(false)} />
            <UsersSave submit={submit} user={user} setUser={setUser} />
            <Fields user={user} submit={submit} setUser={setUser} errors={errors} />
        </>
    )
}