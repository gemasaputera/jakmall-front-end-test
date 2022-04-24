import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import {
  StyledMainOrder,
  ContainerSteps,
  Back,
  BoxIcon,
  LeftSide,
  RightSide,
  WrapperFlex,
  RowBetween,
  Step,
  StepIndicator,
} from "./StyledMainOrder";
import Image from "next/image";
import Button from "../Elements/Button";
import Divider from "../Elements/Divider";
import Paragraph from "../Elements/Typography/Paragraph";
import H2 from "../Elements/Typography/H2";
import H3 from "../Elements/Typography/H3";
import Checkbox from "../Elements/Checkbox";
import TextInput from "../Elements/TextInput";
import TextArea from "../Elements/TextArea";
import { currencyFormat } from "../../../utils/currencyNumber";
import { makeid } from "../../../utils/randomId";

function MainOrder() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      dropshipperName: "",
      phone: "",
      dropshipperPhone: "",
      address: "",
      shipment: "",
    },
  });

  const formValues = watch();
  useEffect(() => {
    if (errors) {
      if (formStep === 1) {
        if (
          formValues["address"] === "" ||
          formValues["email"] === "" ||
          formValues["phone"] === ""
        ) {
          setDisabled(true);
        } else {
          if (Object.keys(errors).length) {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
        }
      }

      if (formStep === 2) {
        if (formValues["shipment"] === "") {
          setDisabled(true);
        } else {
          if (Object.keys(errors).length) {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
        }
      }
    } else {
      setDisabled(false);
    }
  }, [errors, formStep, formValues]);

  const [disabled, setDisabled] = useState(true);
  const [dropship, setDropship] = useState(false);
  const [costGoods] = useState(500000);
  const [dropshipFee, setDropshipFee] = useState(0);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [shipment] = useState([
    {
      id: 1,
      title: "GO-SEND",
      value: 15000,
    },
    {
      id: 2,
      title: "JNE",
      value: 9000,
    },
    {
      id: 3,
      title: "Personal Courier",
      value: 29000,
    },
  ]);
  const [payment] = useState([
    {
      title: "e-Wallet",
      value: "1,500,000 left",
    },
    {
      title: "Bank Transfer",
      value: null,
    },
    {
      title: "Virtual Account",
      value: "",
    },
  ]);
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Delivery",
      active: true,
    },
    {
      id: 2,
      title: "Payment",
      active: false,
    },
    {
      id: 3,
      title: "Finish",
      active: false,
    },
  ]);
  const [formStep, setFormStep] = useState(1);

  const completeFormStep = () => {
    if (!disabled) {
      setFormStep(formStep + 1);
      const id = formStep + 1;
      const filter = steps.findIndex((el) => el.id === id);
      steps[filter].active = true;
      setSteps(steps);
    }
  };

  const handleDropship = (status) => {
    setDropship(status);
    setDropshipFee(status ? 5900 : 0);
    if (!status) {
      setValue("dropshipperName", "");
      setValue("dropshipperPhone", "");
    }
  };

  const handleShipment = (value, id) => {
    setSelectedShipment({ ...value, id });
    setValue("shipment", value);
  };

  const handlePayment = (value) => {
    setSelectedPayment(value);
    setValue("payment", value);
  };

  const onSubmit = (data) => {
    Cookies.set("delivery_details", JSON.stringify(data));
  };

  return (
    <StyledMainOrder>
      <ContainerSteps>
        {steps.map((step) => {
          return (
            <Step key={step.id}>
              <StepIndicator active={step.active}>
                <span>{step.id}</span>
              </StepIndicator>
              <Paragraph style={{ marginLeft: 10, color: "#FF8A00" }}>
                {step.title}
              </Paragraph>
            </Step>
          );
        })}
      </ContainerSteps>
      {formStep !== 3 && (
        <Back as="a" href="#" title="Back to cart">
          <BoxIcon>
            <Image
              src="/icons/arrow_back.svg"
              alt="arrow_back"
              height={14}
              width={14}
            />
          </BoxIcon>
          <Paragraph>Back to cart</Paragraph>
        </Back>
      )}

      <WrapperFlex onSubmit={handleSubmit((data) => onSubmit(data))}>
        <LeftSide>
          {formStep === 1 && (
            <>
              <RowBetween style={{ marginBottom: 26 }}>
                <H2>
                  Delivery details
                  <Divider />
                </H2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    onChange={(e) => handleDropship(e.target.checked)}
                  />
                  <Paragraph>Send as dropshipper</Paragraph>
                </div>
              </RowBetween>
              <RowBetween style={{ alignItems: "flex-start" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    rowGap: 10,
                  }}
                >
                  <TextInput
                    register={register}
                    label="Email"
                    name="email"
                    errors={errors.email}
                    value={watch("email")}
                    isMail
                  />
                  <TextInput
                    register={register}
                    label="Phone Number"
                    name="phone"
                    isPhone
                    minLength={6}
                    maxLength={20}
                    value={watch("phone")}
                    errors={errors.phone}
                  />

                  <TextArea
                    register={register}
                    label="Delivery Address"
                    name="address"
                    maxLength={120}
                    errors={errors.address}
                    value={watch("address")}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    rowGap: 10,
                  }}
                >
                  <TextInput
                    register={register}
                    label="Dropshipper Name"
                    name="dropshipperName"
                    value={watch("dropshipperName")}
                    errors={errors.dropshipperName}
                    disabled={!dropship}
                  />
                  <TextInput
                    register={register}
                    label="DropshipperPhone Number"
                    name="dropshipperPhone"
                    isPhone
                    minLength={6}
                    maxLength={20}
                    value={watch("dropshipperPhone")}
                    errors={errors.dropshipperPhone}
                    disabled={!dropship}
                  />
                </div>
              </RowBetween>
            </>
          )}

          {formStep === 2 && (
            <>
              <RowBetween style={{ marginBottom: 26 }}>
                <H2>
                  Shipment
                  <Divider />
                </H2>
              </RowBetween>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {shipment.map((el) => {
                  return (
                    <Button
                      type="choose-button"
                      onClick={(value) => handleShipment(value, el.id)}
                      chooseTitle={el.title}
                      chooseValue={el.value}
                      defaultValue={selectedShipment?.value}
                      key={el.id}
                    />
                  );
                })}
              </div>
              <RowBetween style={{ marginBottom: 26 }}>
                <H2>
                  Payment
                  <Divider />
                </H2>
              </RowBetween>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {payment.map((el, i) => {
                  return (
                    <Button
                      type="choose-button"
                      onClick={(value) => handlePayment(value)}
                      chooseTitle={el.title}
                      chooseValue={el.value}
                      defaultValue={selectedPayment?.value}
                      key={i}
                    />
                  );
                })}
              </div>
            </>
          )}

          {formStep === 3 && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  gap: 10,
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <H2 style={{ marginBottom: 26 }}>
                    Thank you
                    <Divider />
                  </H2>
                  <Paragraph style={{ marginBottom: 10 }}>
                    Order ID : {makeid()}
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 60, opacity: "0.6" }}>
                    Your order will be delivered{" "}
                    {`${
                      selectedShipment.id === 1
                        ? "today"
                        : selectedShipment.id === 2
                        ? "2 days"
                        : "1 days"
                    }`}{" "}
                    with {selectedShipment?.title}
                  </Paragraph>
                  <Back as="a" href="#" title="Back to cart">
                    <BoxIcon>
                      <Image
                        src="/icons/arrow_back.svg"
                        alt="arrow_back"
                        height={14}
                        width={14}
                      />
                    </BoxIcon>
                    <Paragraph>Go to homepage</Paragraph>
                  </Back>
                </div>
              </div>
            </>
          )}
        </LeftSide>

        <RightSide>
          <div style={{ marginBottom: 88 }}>
            <H3>Summary</H3>
            <Paragraph weight="400">10 items purchased</Paragraph>
            {selectedShipment && (
              <>
                <hr />
                <Paragraph weight="400">Delivery estimation</Paragraph>
                <Paragraph weight="400" color="green">
                  {`${
                    selectedShipment.id === 1
                      ? "today"
                      : selectedShipment.id === 2
                      ? "2 days"
                      : "1 days"
                  } by ${selectedShipment.title}`}
                </Paragraph>
              </>
            )}
            {selectedPayment && (
              <>
                <hr />
                <Paragraph weight="400">Payment method</Paragraph>
                <Paragraph weight="400" color="green">
                  {selectedPayment?.title}
                </Paragraph>
              </>
            )}
          </div>
          <div>
            <RowBetween margin="0px 0px 12px">
              <Paragraph weight="400">Cost of goods</Paragraph>
              <Paragraph weight="700">{currencyFormat(costGoods)}</Paragraph>
            </RowBetween>
            <RowBetween margin="0px 0px 24px">
              <Paragraph weight="400">Dropshipping Fee</Paragraph>
              <Paragraph weight="700">{currencyFormat(dropshipFee)}</Paragraph>
            </RowBetween>
            {selectedShipment && (
              <RowBetween margin="0px 0px 24px">
                <Paragraph weight="400">
                  {selectedShipment?.title} shipment
                </Paragraph>
                <Paragraph weight="700">
                  {currencyFormat(selectedShipment?.value)}
                </Paragraph>
              </RowBetween>
            )}
            <RowBetween margin="0px 0px 30px">
              <H3>Total</H3>
              <H3>
                {currencyFormat(
                  costGoods + dropshipFee + (selectedShipment?.value || 0)
                )}
              </H3>
            </RowBetween>
            {formStep !== 3 && (
              <Button
                type="button"
                disabled={disabled}
                onClick={completeFormStep}
              >
                {formStep === 1
                  ? "Continue to Payment"
                  : `Pay with ${selectedPayment?.title || ""}`}
              </Button>
            )}
          </div>
        </RightSide>
      </WrapperFlex>
    </StyledMainOrder>
  );
}

MainOrder.propTypes = {};

export default dynamic(() => Promise.resolve(MainOrder), { ssr: false });
