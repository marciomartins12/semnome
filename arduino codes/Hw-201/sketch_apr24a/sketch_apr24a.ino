// Define o pino do sensor HW-201
const int pinSensor = 8; // Pino digital 2

// Define o pino do LED
const int pinLED = 13; // Pino digital 13 (LED embutido no Arduino Uno)

void setup() {
  // Inicializa o pino do sensor como entrada
  pinMode(pinSensor, INPUT);
  
  // Inicializa o pino do LED como saída
  pinMode(pinLED, OUTPUT);
  
  // Inicia a comunicação serial para debug (opcional)
  Serial.begin(9600);
}

void loop() {
  // Lê o estado do sensor
  int sensorState = digitalRead(pinSensor);
  
  // Se algo for detectado pelo sensor (estado LOW)
  if (sensorState == LOW) {
    // Acende o LED
    digitalWrite(pinLED, HIGH);
    
    // Imprime no monitor serial (opcional)
    Serial.println("Objeto detectado!");
  } else {
    // Se nada for detectado, desliga o LED
    digitalWrite(pinLED, LOW);
  }
}