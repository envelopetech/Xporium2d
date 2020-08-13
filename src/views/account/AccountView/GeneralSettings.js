import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    FormHelperText,
    Grid,
    Switch,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';



const useStyles = makeStyles(() => ({
    root: {}
}));

const GeneralSettings = ({ className, user, ...rest }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    

    return (
        <Formik
            enableReinitialize
            initialValues={{
                name: 'Nisarg',
                email: 'mnisarg@gmail.com',
                company: 'Xporium',
                designation: 'Founder',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                designation: Yup.string().max(255),
                company: Yup.string().max(255),
                name: Yup.string().max(255).required('Name is required'),
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            })}
            onSubmit={async (values, {
                resetForm,
                setErrors,
                setStatus,
                setSubmitting
            }) => {
                try {

                    
                    resetForm();
                    setStatus({ success: true });
                    setSubmitting(false);
                    enqueueSnackbar('Profile updated', {
                        variant: 'success'
                    });
                } catch (err) {
                    console.error(err);
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
            }) => (
                    <form onSubmit={handleSubmit}>
                        <Card
                            className={clsx(classes.root, className)}
                            {...rest}
                        >
                            <CardHeader title="Profile" />
                            <Divider />
                            <CardContent>
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.name && errors.name)}
                                            fullWidth
                                            helperText={touched.name && errors.name}
                                            label="Name"
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name}
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.email && errors.email)}
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            value={values.email}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.company && errors.company)}
                                            fullWidth
                                            helperText={touched.company && errors.company}
                                            label="Company"
                                            name="company"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.company}
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                       <TextField
                                            error={Boolean(touched.designation && errors.designation)}
                                            fullWidth
                                            helperText={touched.designation && errors.designation}
                                            label="Designation"
                                            name="designation"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.designation}
                                            variant="outlined"
                                        />
                                    </Grid>

                                </Grid>
                                {errors.submit && (
                                    <Box mt={3}>
                                        <FormHelperText error>
                                            {errors.submit}
                                        </FormHelperText>
                                    </Box>
                                )}
                            </CardContent>
                            <Divider />
                            <Box
                                p={2}
                                display="flex"
                                justifyContent="flex-end"
                            >
                                <Button
                                    color="secondary"
                                    disabled={isSubmitting}
                                    type="submit"
                                    variant="contained"
                                >
                                    Save Changes
              </Button>
                            </Box>
                        </Card>
                    </form>
                )}
        </Formik>
    );
};

GeneralSettings.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object.isRequired
};

export default GeneralSettings;
