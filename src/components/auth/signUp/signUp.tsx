"use client"

import { Box, Typography, TextField, Button, CircularProgress, Paper, Divider, InputAdornment } from "@mui/material"
import { useForm } from "react-hook-form"
import { signUp } from '@/lib/auth-client'
import { useState } from "react"
import { PersonOutlined, EmailOutlined, LockOutlined, HowToVoteOutlined } from '@mui/icons-material'

interface FormData {
    name: string,
    email: string,
    password: string
}

export default function Login() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const onSubmit = async (data: FormData) => {
        setLoading(true)
        setMessage('')
        try {
            const { error } = await signUp.email({
                email: data.email,
                password: data.password,
                name: data.name
            })
            if (error) {
                setMessage(error.message)
            } else {
                setMessage('User created successfully. Candidate Registered.')
                reset()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // Saffron to Green gradient with Navy Blue accents
                background: 'linear-gradient(135deg, #FF9933 0%, #ffffff 50%, #138808 100%)',
                p: 2,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    // Subtly overlayed Parliament building or Democracy motif (need an actual asset for image)
                    backgroundImage: 'url(/path/to/your/parliament_watermark.png)', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.04, // Very faint
                    zIndex: 1
                }
            }}
        >
            <Paper
                elevation={24}
                sx={{
                    p: { xs: 4, md: 6 },
                    width: '100%',
                    maxWidth: 480,
                    borderRadius: 4,
                    // White with a subtle gold accent and marble texture hint
                    backgroundColor: '#fefefe',
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(/path/to/your/marble_texture.jpg)',
                    backgroundSize: 'cover',
                    borderTop: '5px solid #FF9933', // Saffron top border
                    borderBottom: '5px solid #138808', // Green bottom border
                    borderLeft: '2px solid #BF9B30', // Gold side accent
                    borderRight: '2px solid #BF9B30', // Gold side accent
                    boxShadow: '0px 15px 40px rgba(0,0,0,0.3)',
                    zIndex: 2,
                    position: 'relative'
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <HowToVoteOutlined sx={{ fontSize: 60, color: '#000080', mb: 1 }} /> {/* Navy Blue Icon */}
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        sx={{ 
                            fontWeight: 800, 
                            color: '#000080', // Navy Blue
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                            fontFamily: 'serif' // More authoritative feel
                        }}
                    >
                        भारतीय लोकतन्त्र
                    </Typography>
                    <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        sx={{ 
                            mt: -1, 
                            fontWeight: 600, 
                            color: '#FF9933' // Saffron for secondary text
                        }}
                    >
                        ELECTION GAME REGISTRATION
                    </Typography>
                    <Divider sx={{ my: 2, borderColor: '#000080', opacity: 0.2 }}/>
                    <Typography variant="body1" color="text.primary" sx={{ mt: 1, fontWeight: 500 }}>
                        Become a Candidate. Nominate Yourself to Lead.
                    </Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                    <TextField
                        label="Full Candidate Name"
                        variant="outlined"
                        fullWidth
                        {...register('name', { required: "Name is required" })}
                        error={!!errors.name}
                        helperText={errors.name?.message as string}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonOutlined sx={{ color: '#FF9933' }} />
                              </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF9933',
                                },
                            }
                        }}
                    />

                    <TextField
                        label="Official E-mail Address"
                        variant="outlined"
                        fullWidth
                        type='email'
                        {...register('email', { required: "Email is required" })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailOutlined sx={{ color: '#000080' }} />
                              </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000080',
                                },
                            }
                        }}
                    />

                    <TextField
                        label="Secret Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        {...register('password', { required: "Password is required" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockOutlined sx={{ color: '#138808' }} />
                              </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#138808',
                                },
                            }
                        }}
                    />

                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        disabled={loading}
                        sx={{
                            mt: 3,
                            py: 2,
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            // Saffron to Green gradient with gold border
                            background: 'linear-gradient(to right, #FF9933, #ffffff, #138808)',
                            color: '#000080', // Navy Blue text
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                            borderRadius: 1,
                            border: '2px solid #BF9B30', // Gold border
                            transition: 'all 0.4s ease',
                            '&:hover': {
                                background: 'linear-gradient(to right, #e68a2e, #f0f0f0, #117a07)',
                                transform: 'translateY(-3px)',
                                boxShadow: '0px 8px 20px rgba(191, 155, 48, 0.6)'
                            },
                            '&:disabled': {
                                background: '#e0e0e0',
                                color: '#a0a0a0'
                            }
                        }}
                    >
                        {loading ? <CircularProgress size={28} color="inherit" /> : "Sign Up"}
                    </Button>

                    {message && (
                        <Box 
                            sx={{ 
                                mt: 3, 
                                p: 2, 
                                borderRadius: 1, 
                                backgroundColor: message.includes('success') ? '#e6fffa' : '#fff5f5', 
                                textAlign: 'center',
                                border: '1px solid',
                                borderColor: message.includes('success') ? '#38b2ac' : '#feb2b2'
                            }}
                        >
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    fontWeight: 700,
                                    color: message.includes('success') ? "#2c7a7b" : "#c53030" 
                                }}
                            >
                                {message}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Box>
    )
}