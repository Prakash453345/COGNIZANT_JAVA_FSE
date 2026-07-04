import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create a mock object for the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Use the mock object in the service and verify the result
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
