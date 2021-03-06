import React from "react";
import {Field} from "redux-form";
import StyledInput from "components/StyledInput";
import {required} from "validation";
import {Grid} from "@material-ui/core";
import masks from "utils/masks";


const CheckoutForm = ({type}) => (
  <>
    {type === "shipping" && (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Field
            name="firstname"
            label="First Name"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="lastname"
            label="Last Name"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="address"
            label="Address"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="country"
            label="Country"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Field
            name="city"
            label="City"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Field
            name="zip"
            label="Postal Code"
            inputProps={{maxLength: 12}}
            type="tel"
            component={StyledInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
          name="email"
          label="Email"
          type="email"
          component={StyledInput}
        />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="phone"
            label="Phone"
            inputProps={{maxLength: 30}}
            type="tel"
            component={StyledInput}
            {...masks.phone}
          />
        </Grid>
      </Grid>
    )}
    {type === "billing" && (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Field
            name="firstname"
            label="First Name"
            variant="outlined"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="lastname"
            label="Last Name"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="address"
            label="Address"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="country"
            label="Country"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Field
            name="city"
            label="City"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Field
            name="zip"
            label="Postal Code"
            inputProps={{ maxLength: 12 }}
            type="tel"
            component={StyledInput}
            validate={[required]}
          />
        </Grid>
      </Grid>
    )}
  </>
)

export default CheckoutForm
