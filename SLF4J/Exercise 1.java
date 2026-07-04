import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        String username = "Prakash";
        String password = "";

        logger.info("Login request received for user: {}", username);

        if (password.isEmpty()) {
            logger.warn("Password cannot be empty.");
        }

        try {
            int result = 10 / 0;
            logger.info("Result: {}", result);
        } catch (ArithmeticException e) {
            logger.error("An error occurred while performing the calculation.", e);
        }

        logger.info("Application execution completed.");
    }
}
