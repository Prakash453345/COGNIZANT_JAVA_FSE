import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceVerifyTest {

    @Test
    public void testVerifyInteraction() {

        // Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Call the method with arguments
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify
        verify(mockApi).getData();
    }
}
